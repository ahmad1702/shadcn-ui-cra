import { ComponentProps, useState } from 'react';
import { ModeToggle } from './components/mode-toggle';
import { useTheme } from './components/theme-provider';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { cn } from './lib/utils';

const CodeText = (props: ComponentProps<'span'>) => {
  return <span {...props} className={cn(props.className, 'bg-muted text-muted-foreground rounded font-mono text-sm p-1')} />
}

function App() {
  const [count, setCount] = useState(0)
  const { theme } = useTheme()
  return (
    <header className='h-screen flex items-center py-8 container'>
      <div className="w-full grid grid-cols-2 gap-4 content-start items-center justify-center">
        <div className='col-span-2'>
          <div className='text-4xl font-bold'>Shadcn CRA Starter</div>
          <div className='text-lg text-muted-foreground'>The advantages of Create-React-App and Shadcn UI, all in one place</div>
        </div>
        <Card className='h-72'>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>Adding Components</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='text-muted-foreground text-sm'>
              Step 1: Use the <a target='_blank' rel='noreferrer' href='https://ui.shadcn.com/docs/cli' className='underline'>Shadcn-UI CLI Tool</a>
            </div>
            <div className='text-sm p-2 rounded border bg-muted text-muted-foreground'>
              <p className='font-mono'>npx shadcn-ui@latest add button</p>
            </div>
            <div className='text-muted-foreground text-sm'>
              Step 2: Use it !
            </div>
            <Button variant='outline' onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
          </CardContent>
        </Card>
        <Card className='h-72'>
          <CardHeader>
            <CardTitle>Dark Mode</CardTitle>
            <CardDescription>Choose between Light, Dark, or System Theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='text-muted-foreground text-sm mb-1'>Example:</div>
            <div className='border rounded p-4 flex items-center gap-2'>
              <ModeToggle />
              <span className='mr-4 align-middle'>Current Theme: <CodeText>{theme}</CodeText></span>
            </div>
          </CardContent>
          <CardFooter className='text-muted-foreground text-sm'>
            <p>A Modified version of Shadcn's <a target='_blank' rel='noreferrer' href='https://ui.shadcn.com/docs/dark-mode/vite' className='underline'>Vite Dark Mode</a> is being used for the <CodeText>mode-toggle.tsx</CodeText> and <CodeText>theme-provider.tsx</CodeText> files</p>
          </CardFooter>
        </Card>
        <Card className='h-72'>
          <CardHeader>
            <CardTitle>Theming & Customization</CardTitle>
            <CardDescription>Make this app yours</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc ml-4'>
              <li>There is a <CodeText>components.json</CodeText> file that will edit what gets added when you use the cli 'add' functionality. More info <a target='_blank' rel='noreferrer' href='https://ui.shadcn.com/docs/components-json' className='underline'>here</a>.</li>
              <li>You can edit the colors and look of your app by updating the <CodeText>index.css</CodeText> file with css generated from the <a target='_blank' rel='noreferrer' href='https://ui.shadcn.com/themes' className='underline'>shadcn-ui Theming Page</a>.</li>
            </ul>
          </CardContent>
          <CardFooter className='text-muted-foreground text-sm'>
            <p>You don't have to run <CodeText>npx shadcn-ui init</CodeText>. That is what generated the components</p>
          </CardFooter>
        </Card>
        <Card className='h-72'>
          <CardHeader>
            <CardTitle>Contribute to This Starter</CardTitle>
            <CardDescription>Have any suggestions?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc ml-4'>
              <li>Check out the <a target='_blank' rel='noreferrer' href="https://github.com/ahmad1702/shadcn-ui-cra" className='underline'>react-shadcn-cra</a> repo.</li>
              <li>You can <a target='_blank' rel='noreferrer' href="https://github.com/ahmad1702/shadcn-ui-cra/issues/new" className='underline'>open an issue</a> for any bugs you run into as well as for any suggestions you may have.</li>
              <li>We are open to making this fit the use cases for all in order to decrease the amount of time to start a new application using ShadcnUI and CRA.</li>
            </ul>
          </CardContent>
          <CardFooter className='text-muted-foreground text-sm'>
            <p>There is also a <a target='_blank' rel='noreferrer' href="https://github.com/ahmad1702/shadcn-ui-vite" className='underline'>Vite React version of this starter</a>.</p>
          </CardFooter>
        </Card>
      </div>
    </header>
  );
}

export default App;
