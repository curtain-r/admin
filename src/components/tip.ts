import { message } from "ant-design-vue"
import {CheckOutlined} from '@ant-design/icons-vue'
export  const tip = (msg:string) => message.info({
  content: () => msg,
  style: {
    width: "10vw",
    position: "absolute",
    top: "3vh",
    left: "45vw",
    color: "red"
  }
})