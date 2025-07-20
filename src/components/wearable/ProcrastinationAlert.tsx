// Componente premium usando Web Bluetooth API
export function WearableIntegration() {
    const [device, setDevice] = useState<BluetoothDevice | null>(null);
    const { hasPremium } = useSubscription();
  
    const connectDevice = async () => {
      const dev = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['vibration_service'] }]
      });
      setDevice(dev);
    };
  
    useProcrastinationDetector((isProcrastinating) => {
      if (device && isProcrastinating) {
        // Enviar señal de vibración
        device.gatt?.writeValue(new Uint8Array([1]));
      }
    });
  
    if (!hasPremium) return <UpgradePrompt feature="pulsera" />;
  
    return (
      <div>
        <Button onClick={connectDevice}>
          {device ? 'Conectado' : 'Conectar Pulsera'}
        </Button>
        <Badge variant={device ? 'success' : 'warning'}>
          {device ? 'Conectado' : 'No conectado'}
        </Badge>
      </div>
    );
  }