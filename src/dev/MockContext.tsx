import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function MockContext() {
  const [userData, setUserData] = useState({
    level: 3,
    points: 450,
    streak: 7,
    isDetoxActive: false,
    currentGoal: {
      name: "Aprender TypeScript",
      progress: 65,
      reason: "Para ser un desarrollador más competente"
    }
  });

  return (
    <div className="space-y-4">
      <div className="border p-4 rounded-lg">
        <h3 className="font-bold mb-2">Datos de Usuario</h3>
        <div className="space-y-2">
          <div>
            <label>Nivel: {userData.level}</label>
            <Slider 
              defaultValue={[userData.level]}
              max={10}
              step={1}
              onValueChange={([val]) => setUserData({...userData, level: val})}
            />
          </div>
          
          <div>
            <label>Racha: {userData.streak} días</label>
            <Slider 
              defaultValue={[userData.streak]}
              max={30}
              step={1}
              onValueChange={([val]) => setUserData({...userData, streak: val})}
            />
          </div>
          
          <Button
            variant={userData.isDetoxActive ? "destructive" : "secondary"}
            onClick={() => setUserData({...userData, isDetoxActive: !userData.isDetoxActive})}
          >
            {userData.isDetoxActive ? "Desactivar Detox" : "Activar Detox"}
          </Button>
        </div>
      </div>
      
      <div className="border p-4 rounded-lg">
        <h3 className="font-bold mb-2">Objetivo Actual</h3>
        <textarea
          className="w-full p-2 border rounded mb-2"
          value={userData.currentGoal.reason}
          onChange={(e) => setUserData({
            ...userData,
            currentGoal: {
              ...userData.currentGoal,
              reason: e.target.value
            }
          })}
        />
        <label>Progreso: {userData.currentGoal.progress}%</label>
        <Slider 
          defaultValue={[userData.currentGoal.progress]}
          max={100}
          step={5}
          onValueChange={([val]) => setUserData({
            ...userData,
            currentGoal: {
              ...userData.currentGoal,
              progress: val
            }
          })}
        />
      </div>
    </div>
  );
}