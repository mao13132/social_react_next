import { Chat } from "@/components/screens/chats/Chat";
import { ChatList } from "@/components/screens/chats/ChatList";
import { CurrentUser } from "@/components/screens/chats/CurrentUser";

import {Loader} from '../components/screens/ui/Loader/Loader';


export default function ChatHome() {
  return <div className='wrapper'>
    <div className="panel">

      <CurrentUser />
      <ChatList />
    </div>

    <div>
      <Chat />
    </div>

  </div>
}
