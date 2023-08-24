import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { REVIEW_NOT_FOUND } from './constants';
import { CreateReviewDTO } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDTO) {
		return this.reviewService.create(dto);
	}

	@Get(':id')
	@HttpCode(200)
	async get(@Param('id') id: string) {
		const deletedDoc = await this.reviewService.findByProductId(id);

		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
