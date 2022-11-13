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
import 'ts-draw';

const selectManagerData = {effectMaterial: {color: "#ffff00"}};
const interactionTypes = {select: true};

function App() {
  // const [ticket, setTicket] = useState('f3d18b5cf645e16648978afaa0b3389ed03bb463eeaa5049f39a841a49fdbc40ff6a1f6a35c358525781ff58b48eb8bc766f9c5273704ffb7d9f1b3a644086705c3e6dbe2e4fc5101c2b3b26e82b34f75e4a9b808658acfeccb17325d2cad436de68aef83131fc-d0b39c5fb2eaaa5eb54c0f288f4fa44e');
  const [ticket, setTicket] = useState('98f2fba58240e3e772ee18a5c8c5c2fef489b95b964d65bf3e81744fd4debbbfc6954994ab7fc2f039b2fc4da28eddebd5ee8d84fb4584ced58479cda160ce191d6cebb3d211652a6642cfe3a8f8edf5b7e20dd3e71534f87d08656079de493802f5691270a6244a8c4823d4b7064fcd1209c5cc577f0429-eec28ef5f9d59c277e4d614c817502a8');
  const [modelViewUrl, setModelViewUrl] = useState('https://sdr7euc1.eu-central-1.shapediver.com');
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
          height={'85vh'}

        >
          <Card
            columnStart="1"
            columnEnd="4"
            rowStart='1'
            rowEnd='-2'
          >
            <SdViewport viewportId='viewport_1'>
              <SdViewportError/>
              <SdViewportInteractionEngine selectManager={selectManagerData}/>
            </SdViewport>
          </Card>
          <Card
            columnStart="4"
            columnEnd="-1"
            rowStart='1'
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
            display={'none'}
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
        <canvas id="myCanvas"></canvas>

        <Footer/>
      </div>
    </>
  );
}

export default App;
