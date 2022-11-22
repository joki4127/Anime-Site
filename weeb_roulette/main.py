from fastapi import FastAPI, APIRouter
import db
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import anime, accounts, forums
from api_call import get_anime, get_anime_list
from accounts.authenticator import authenticator
from models.accounts import Profile


app = FastAPI()
app.include_router(accounts.router)
app.include_router(authenticator.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }

@app.get("/all")
def get_all():
    data = db.all()
    return {"data": data}

@app.get("/anime_list")
def anime_list():
    data = get_anime_list()
    return data

@app.get("/anime_detail")
def anime_detail(id):
    data = get_anime(id)
    return data

@app.get("anime_queue")
def anime_queue():
    for i in Profile.anime_ids:
        data = get_anime(i)
        queue = {'data': data.data}
    return queue
    # figure out formatting class to dictionary of lists to dictionary of dictionary 
    # potentially make another empty dictionary? 


app.include_router(anime.router)
app.include_router(forums.router)
