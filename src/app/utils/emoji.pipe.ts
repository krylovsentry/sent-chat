import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'emojiPipe'})
export class EmojiPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case (7):
        return '🥰';
      case (6):
        return '😍';
      case (5):
        return '😎';
      case (4):
        return '😄';
      case (3):
        return '😊';
      case (2):
        return '🙂';
      case (1):
        return '🥱';
      case (0):
        return '🥶';
      case (-7):
        return '👨‍❤️‍👨';
      case (-6):
        return '🤡';
      case (-5):
        return '💩';
      case (-4):
        return '🖕';
      case (-3):
        return '👿';
      case (-2):
        return '🤢';
      case (-1):
        return '😟';
      default:
        return '🤡';
    }
  }
}
