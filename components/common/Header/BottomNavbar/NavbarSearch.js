
const NavbarSearch = (props) => {
  return (
    <div className="rd-navbar-search rd-navbar-search-top-panel"><a data-rd-navbar-toggle=".rd-navbar-inner,.rd-navbar-search" href="wt_62309.html#" className="rd-navbar-search-toggle mdi"><span></span></a>
      <form action="wt_62309/search-results.html" data-search-live="rd-search-results-live" method="GET" className="rd-navbar-search-form search-form-icon-right rd-search">
        <div className="form-group">
          <label for="rd-navbar-search-form-input" className="form-label rd-input-label">Type and hit enter...</label>
          <input id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off" className="rd-navbar-search-form-input form-control form-control-gray-lightest"/>
        </div>
        <div id="rd-search-results-live" className="rd-search-results-live"></div>
      </form>
    </div>
  )
}
export default NavbarSearch
