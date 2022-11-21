
function Header() {
  return (
    <header class="section-header">
      <section class="header-main">
        <div class="container">
          <div class="row gy-3 align-items-center">
            <div class="col-lg-2 col-sm-4 col-4">
              <a href="http://therichpost.com" class="navbar-brand">
                ShoppingAtoZ
              </a>
            </div>
            <div class="order-lg-last col-lg-4 col-sm-8 col-8">
              <div class="float-end">
                {/* <a href="#" class="btn btn-light">
                  <i class="fa fa-user"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline-block">Sign in </span>
                </a> */}
                {/* <a href="#" class="btn btn-light">
                  <i class="fa fa-heart"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline-block">Wishlist</span>
                </a> */}
                {/* <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  class="btn btn-light"
                >
                  <i class="fa fa-shopping-cart"></i>{" "}
                  <span class="ms-1">My cart </span>
                </a> */}
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12">
              <form action="#" class="">
                <div class="input-group">
                <select class="form-select" style={{width:"10%"}}>
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <input
                    type="search"
                    class="form-control"
                    style={{ width: "70%" }}
                    placeholder="Search"
                  />
                  <button class="btn search-button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <nav class="navbar navbar-light  border-top navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar_main">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link ps-0" href="#">
                  {" "}
                  Beauty & Personal care{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Women's Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Men's Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home & Kitchen
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Couple shopping
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu name
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Others
                </a>
                <ul class="dropdown-menu">
                  <li>
                    {" "}
                    <a class="dropdown-item" href="#">
                      Submenu one{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a class="dropdown-item" href="#">
                      Submenu two
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a class="dropdown-item" href="#">
                      Submenu three
                    </a>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
