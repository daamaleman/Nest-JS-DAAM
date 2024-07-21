import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Asset handler')
    .setDescription('The social media API description')
    .setVersion('1.0')
    // .addTag('test')
    // .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };

  const custom: SwaggerCustomOptions = {
    explorer: true,
    useGlobalPrefix: true,
    // customfavIcon: 'icon',
  };
  //app.setGlobalPrefix('v1');
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, custom);
  await app.listen(3000);
}
bootstrap();
