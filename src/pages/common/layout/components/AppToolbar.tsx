import { Link as NavLink } from "@/pages/common/Link";
import { AppBar, AppBarProps, Link, Toolbar } from "@mui/material";
import { Logo } from "./Logo.js";

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const { sx, ...other } = props;

  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }}
      color="default"
      elevation={1}
      {...other}
    >
      <Toolbar>
        {/* App name / logo */}
        <Link color="inherit" underline="none" href="/" component={NavLink}>
          <Logo />
        </Link>
        <span style={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

type AppToolbarProps = Omit<AppBarProps, "children">;
