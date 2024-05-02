import { ChakraProvider } from '@chakra-ui/react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ProfileCard
          name="Samantha Brooke"
          role="Creative Writer"
          location="Ontario, Canada"
          joinDate="July, 2021"
          interests={["Productivity", "Work", "Business", "Woman"]}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
