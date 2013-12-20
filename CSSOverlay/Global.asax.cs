using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using CSSOverlay.App_Start;

namespace CSSOverlay
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}