# -*- coding: utf-8 -*-

from graphene import ObjectType, Schema


class Query(ObjectType):
    pass


class Mutation(ObjectType):
    pass


schema = Schema(query=Query, mutation=Mutation)