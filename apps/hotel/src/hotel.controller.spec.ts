import { Test, TestingModule } from '@nestjs/testing';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';

describe('HotelController', () => {
  let hotelController: HotelController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HotelController],
      providers: [HotelService],
    }).compile();

    hotelController = app.get<HotelController>(HotelController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hotelController.getHello()).toBe('Hello World!');
    });
  });
});
