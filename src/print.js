import _ from 'lodash'
import dayjs from 'dayjs'
export default function print() {
  console.log(dayjs().format() + _.join(['Another', 'module', 'loaded!'], ' '))
}
