import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ComponentGallery from './ComponentGallery';
import MockContext from './MockContext';

export default function DevTools() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? 'w-[80vw] h-[70vh]' : 'w-12 h-12'}`}>
      {isOpen ? (
        <div className="bg-card border rounded-lg shadow-lg h-full flex flex-col">
          <div className="flex justify-between p-2 border-b">
            <h2 className="text-lg font-bold">Dev Tools</h2>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          
          <Tabs defaultValue="components" className="flex-grow flex flex-col">
            <TabsList className="grid grid-cols-2 w-[300px] mx-auto">
              <TabsTrigger value="components">Componentes</TabsTrigger>
              <TabsTrigger value="context">Simulación</TabsTrigger>
            </TabsList>
            
            <TabsContent value="components" className="flex-grow overflow-auto">
              <ComponentGallery />
            </TabsContent>
            
            <TabsContent value="context" className="flex-grow overflow-auto p-4">
              <MockContext />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <button 
          className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          🛠️
        </button>
      )}
    </div>
  );
}