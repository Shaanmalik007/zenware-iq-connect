
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ChatInterface from './ChatInterface';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button 
            className="bg-zenblue text-white p-4 rounded-full shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Chat with us"
          >
            <div className="relative">
              <MessageCircle 
                size={28} 
                className="group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                1
              </span>
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out">
              Chat with us
            </span>
          </button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md p-0">
          <ChatInterface onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatButton;
