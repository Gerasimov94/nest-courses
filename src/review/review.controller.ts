import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from 'src/review/review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

	@Get(':id')
	async get(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
