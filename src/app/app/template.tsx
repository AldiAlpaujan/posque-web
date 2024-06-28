// MUI
import Box from "@mui/material/Box"

// component
import AppWrapper from "@/persentation/component/template/AppWrapper";

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box component={'main'}>
      <AppWrapper>
        {children}
      </AppWrapper>
    </Box>
  )
}