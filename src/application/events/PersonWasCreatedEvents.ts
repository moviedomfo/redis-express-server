import {Entity} from "@common/CleanBases/Entity";
import EventBase from "@common/CleanBases/EventBase";

import {IKafkaMessageDto} from "@domain/DTOs/MessageDto";
import {ListBE} from "@domain/Entities/ListBE";

export default class PersonWasCreatedEvent extends EventBase {
  constructor(content: ListBE, origin: string) {
    super("PersonWasCreated", content, origin);
  }

  //** */
  async Emit(): Promise<void> {
    const msg: IKafkaMessageDto = {
      key: this.Content.Id.toString(),
      command: this.CommandName,
      content: JSON.stringify(this.Content),
      origin: this.Origin,
    };

    /** send to Event Buss */
    await this.EventBusRepo.PushToQueue(msg, "customers");
  }
}
