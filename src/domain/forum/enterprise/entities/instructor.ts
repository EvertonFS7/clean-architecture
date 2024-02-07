import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface IntructorProps {
  name: string
}

export class Intructor extends Entity<IntructorProps> {
  static create(props: IntructorProps, id?: UniqueEntityID) {
    const instructor = new Intructor(props, id)

    return instructor
  }
}
