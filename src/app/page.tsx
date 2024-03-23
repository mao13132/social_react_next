import { Chat } from "@/components/screens/chats/Chat";
import { ChatList } from "@/components/screens/chats/ChatList";

import {Loader} from '../components/screens/ui/Loader/Loader';
import { CurrentUser } from "@/components/screens/chats/CurrentUser/CurrentUser";


export default function ChatHome() {
  return <div className='wrapper'>
    <div className="panel">

      <ChatList />
    </div>

    <div>
      <Chat />
    </div>

  </div>
}
