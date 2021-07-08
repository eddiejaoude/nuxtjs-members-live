import { Injectable } from '@nestjs/common';
import { createClient } from '@astrajs/collections';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  private async getClient() {
    console.log(this.configService.get('ASTRA_DATABASE_REGION'));
    return await createClient({
      astraDatabaseId: this.configService.get('ASTRA_DATABASE_ID'),
      astraDatabaseRegion: this.configService.get('ASTRA_DATABASE_REGION'),
      applicationToken: this.configService.get('ASTRA_APPLICATION_TOKEN'),
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getMembers() {
    const client = await this.getClient();
    const collection = client.namespace('NextJS').collection('members');
    const members = await collection.find({});

    return Object.keys(members).map((key) => {
      return {
        id: key,
        ...members[key],
      };
    });
  }

  async saveMember(member) {
    const client = await this.getClient();
    const collection = client.namespace('NextJS').collection('members');
    await collection.create({
      name: member.name,
      github: member.github,
      location: member.location,
    });
  }
}
