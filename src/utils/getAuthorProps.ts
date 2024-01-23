import { ipsers } from '../config/ipsers';

export function getAuthorProps(name: string) {
  const members = Object.values(ipsers).flatMap((category) => category.members);
  const author = members.find((member) => member.name === name);

  return author;
}
