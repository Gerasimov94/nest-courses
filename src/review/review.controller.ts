import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { REVIEW_NOT_FOUND } from 'src/review/constants';
import { CreateReviewDTO } from 'src/review/dto/create-review.dto';
import { ReviewService } from 'src/review/review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}
	@Post('create')
	async create(@Body() dto: CreateReviewDTO) {
		return this.reviewService.create(dto);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const deletedDoc = await this.reviewService.delete(id);

		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
