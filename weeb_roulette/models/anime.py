from pydantic import BaseModel
from typing import Optional
from bson import ObjectId

# class PydanticObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, value: ObjectId | str) -> ObjectId:
#         if value:
#             try:
#                 ObjectId(value)
#             except:
#                 raise ValueError(f"Not a valid object id: {value}")
#         return value

class AnimeQueueIn(BaseModel):
    name: str | None = None
    profile_id: str | None = None

class AnimeQueue(AnimeQueueIn):
    id: str | None = None
    anime_ids: list[str] | None = []

class AnimeIdRequest(BaseModel):
    anime_id: str

class AnimeQueueList (BaseModel):
    animequeues : list[AnimeQueue]
