import './App.css';
import SdSession from './components/shapediver/atoms/SdSession';
import SdViewport from './components/shapediver/atoms/SdViewport';
import SdSessionParameterPanel from './components/ui-kit/molecules/SdSessionParameterPanel';
import SdViewportError from './components/ui-kit/atoms/SdViewportError';
import { Card, Grid, SliderField, TextField } from '@aws-amplify/ui-react';
import { ChangeEvent, useState } from 'react';
import SdSessionParameterBridge from './features/parameters/SdSessionParameterBridge';
import SdViewportInteractionEngine from './components/shapediver/atoms/SdViewportInteractionEngine';
import SdSessionInteractionData from './components/shapediver/atoms/SdSessionInteractionData';
import SdSessionAnimationData from './components/shapediver/atoms/SdSessionAnimationData';
import BootstrapNavbar from './components/bootstrap/Navbar';
import Footer from './components/bootstrap/Footer';

const selectManagerData = {effectMaterial: {color: "#ffff00"}};
const interactionTypes = {select: true};

function App() {
  const [ticket, setTicket] = useState('f3d18b5cf645e16648978afaa0b3389ed03bb463eeaa5049f39a841a49fdbc40ff6a1f6a35c358525781ff58b48eb8bc766f9c5273704ffb7d9f1b3a644086705c3e6dbe2e4fc5101c2b3b26e82b34f75e4a9b808658acfeccb17325d2cad436de68aef83131fc-d0b39c5fb2eaaa5eb54c0f288f4fa44e');
  const [modelViewUrl, setModelViewUrl] = useState('https://sdeuc1.eu-central-1.shapediver.com');
  const [interactionLevel, setInteractionLevel] = useState(1);
  
  return (
    <>
      <BootstrapNavbar/>
      <div className="App">
        <Grid
          className="Grid"
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          templateRows="1fr 1fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="4"
            rowStart='1'
            rowEnd='-1'
          >
            <SdViewport viewportId='viewport_1'>
              <SdViewportError/>
              <SdViewportInteractionEngine selectManager={selectManagerData}/>
            </SdViewport>
          </Card>
          <Card
            columnStart="4"
            columnEnd="-1"
            rowStart='2'
            style={{maxHeight: '100vh'}}
          >
            <SdSession
              ticket={ticket}
              modelViewUrl={modelViewUrl}
            >
              <SdSessionAnimationData />
              <SdSessionInteractionData level={interactionLevel} interactionTypes={interactionTypes}/>
              <SdSessionParameterBridge/>
              <SdSessionParameterPanel/>
            </SdSession>
          </Card>
          <Card
            columnStart="4"
            columnEnd="-1"
            rowStart='1'
          >
              <TextField
                placeholder="Ticket for embedding"
                label="Ticket"
                defaultValue={ticket}
                onChange={(e : ChangeEvent<HTMLInputElement>) => setTicket(e.currentTarget.value)}
              />
              <TextField
                placeholder="ModelViewUrl"
                label="ModelViewUrl"
                defaultValue={modelViewUrl}
                onChange={(e : ChangeEvent<HTMLInputElement>) => setModelViewUrl(e.currentTarget.value)}
              />
              <SliderField
                label="Interaction level"
                defaultValue={interactionLevel}
                min={0}
                max={10}
                onChange={(v: number) => setInteractionLevel(v)}
              />
          </Card>
        </Grid>
      </div>
      <Footer/>
    </>
  );
}

export default App;
