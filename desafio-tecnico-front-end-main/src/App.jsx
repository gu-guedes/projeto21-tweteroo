import Weather from './Pages/Weather/Weather.jsx';
import GlobalStyles, { AppContainer } from './styles/globalStyles.js';
import ResetStyle from './styles/reset.js';

function App() {

	return (
		<AppContainer>
			<ResetStyle />
			<GlobalStyles />
			<Weather/>
		</AppContainer>
	);
}

export default App;
