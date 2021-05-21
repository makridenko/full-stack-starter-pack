# -*- coding: utf-8 -*-

import graphene
from graphene import ObjectType, Schema


class Query(ObjectType):
    hello = graphene.String()

    def resolve_hello(root, info, **kwargs):
        return 'world!'


# class Mutation(ObjectType):
#     pass


schema = Schema(
    query=Query,
    # mutation=Mutation,
)
