import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material'
import { LightMode, DarkModeOutlined, SettingsBrightness } from '@mui/icons-material'

function SelectMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-mode">Mode</InputLabel>
      <Select
        labelId="select-mode"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightMode fontSize='small'/> Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeOutlined fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightness fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  return (
    <>
      <SelectMode />
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
