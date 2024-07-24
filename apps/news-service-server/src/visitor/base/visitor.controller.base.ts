/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VisitorService } from "../visitor.service";
import { VisitorCreateInput } from "./VisitorCreateInput";
import { Visitor } from "./Visitor";
import { VisitorFindManyArgs } from "./VisitorFindManyArgs";
import { VisitorWhereUniqueInput } from "./VisitorWhereUniqueInput";
import { VisitorUpdateInput } from "./VisitorUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class VisitorControllerBase {
  constructor(protected readonly service: VisitorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Visitor })
  async createVisitor(
    @common.Body() data: VisitorCreateInput
  ): Promise<Visitor> {
    return await this.service.createVisitor({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Visitor] })
  @ApiNestedQuery(VisitorFindManyArgs)
  async visitors(@common.Req() request: Request): Promise<Visitor[]> {
    const args = plainToClass(VisitorFindManyArgs, request.query);
    return this.service.visitors({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async visitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    const result = await this.service.visitor({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVisitor(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() data: VisitorUpdateInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.updateVisitor({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVisitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.deleteVisitor({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,

        visitor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
