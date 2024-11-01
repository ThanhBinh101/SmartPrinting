import { Test, TestingModule } from '@nestjs/testing';
import { Report } from './report';

describe('Report', () => {
  let provider: Report;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Report],
    }).compile();

    provider = module.get<Report>(Report);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
