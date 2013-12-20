using System.Web.Optimization;

namespace CSSOverlay.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/js")
                .Include("~/Scripts/jquery-2.0.3.js")
                .Include("~/Scripts/overlay/overlay.js")
                .Include("~/Scripts/app/HomeIndexView.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/overlay/overlay.css")
                .Include("~/Content/site.css"));
        }
    }
}