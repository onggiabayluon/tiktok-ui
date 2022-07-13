// Layouts
import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';

// Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';
import routes from '~/config/routes';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
