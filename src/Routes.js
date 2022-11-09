import { Route } from 'react-router-dom'
import { Characters } from './pages/Characters'
import { Episodes } from './pages/Episodes'
import { Locations } from './pages/Locations/Locations'
import { Watch } from './pages/WatchList'

const Routes = () => (
    <>
        <Route path={'/'} exact component={Characters} />
        <Route path={'/episodes'} component={Episodes} />
        <Route path={'/locations'} component={Locations} />
        <Route path={'/watch'} component={Watch} />
    </>
)

export default Routes
