(ns onion.app
  "cloud-itonami/onion — etzhayyim-wasm-onion-0n10n001 appview — reagent +
  re-frame, view built from jp-go-dds (デジタル庁デザインシステム) hiccup.

  Faithful port of the previous SvelteKit scaffold's status page
  (`wasm/etzhayyim-wasm-onion-0n10n001/svelte/src/routes/+page.svelte`,
  63 lines): a static display of this Worker's own declared surface —
  title / project / kind, route count + list, wrangler var keys, an
  XRPC-enabled flag, and its own source path. Every field below mirrors
  the constant `app` object `+page.svelte` held in its <script> block;
  nothing here is invented and nothing is simplified away.

  Three kinds of change were made to that constant, and all three are
  spelled out here rather than silently applied (same pattern as the
  cloud-itonami-isic-6110 open-network migration this port follows):

  - `:app/relative-path` now names this file, not the deleted Svelte one.
  - `:app/xrpc?` is now false. This migration's wrangler.jsonc drops
    `main` entirely (see that file's header comment): `src/app.ts`
    (untouched by this migration — it is the production kotodama Worker
    logic) never calls `env.ASSETS.fetch`, and the SvelteKit BFF that used
    to serve `/xrpc/[...path]` no longer builds or deploys, so the XRPC
    proxy this page used to advertise as enabled is no longer wired to
    any route this Worker serves. The proxy handler itself is preserved
    byte-for-byte (plus a header) at
    `wasm/etzhayyim-wasm-onion-0n10n001/src/xrpc-mcp-router-proxy.ts`
    (moved, not deleted, from
    `svelte/src/routes/xrpc/[...path]/+server.ts`) — reviving it is an
    open product decision this migration did not make.
  - `:app/route-count` and `:app/routes` are corrected, not copied. The
    Svelte scaffold's `app` constant held `routeCount: 0` and
    `routes: []`, but `wrangler.jsonc` actually declares two routes
    (`0n10n001.etzhayyim.com/*`, `onion.etzhayyim.com/*`) — the generated
    status page was stale on this point. Likewise `:app/vars` is the real
    `wrangler.jsonc` `vars` key set (14 keys, sorted), not the Svelte
    scaffold's empty `vars: []`.

  `public/index.html`'s inlined <style> was produced once, at authoring
  time, by `jp-go-dds.page/->page` running on the JVM (via this deps.edn's
  jp-go-dds git/sha), concatenating the vendored `dds.css` with
  `jp-go-dds.core/ext-css` — exactly what `jp-go-dds.page/page` composes
  for its own <style> block. This namespace only requires
  `jp-go-dds.core` — the browser bundle does not need `jp-go-dds.page` or
  `html.core` at runtime; those are JVM-only tools used to author the
  static shell once. Regenerate that shell (e.g. if jp-go-dds's core
  components or ext-rules change) with:

    (require '[jp-go-dds.page :as page] '[clojure.java.io :as io])
    (spit \"public/index.html\"
          (page/->page {:title \"etzhayyim-wasm-onion-0n10n001\"
                         :lang \"ja\"
                         :description \"cloud-itonami/onion — Onion 0n10n001, Cloudflare worker appview (reagent + re-frame + jp-go-dds).\"
                         :css (slurp (io/resource \"jp_go_dds/dds.css\"))}
                        [:div {:id \"app\"} \"etzhayyim-wasm-onion-0n10n001 loading…\"]
                        [:script {:src \"js/app.js\"}]))"
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [jp-go-dds.core :as dds]))

;; -- db ------------------------------------------------------------------
;;
;; Same nine facts + own source path that `+page.svelte`'s `app` const
;; held (title/project/name/kind/routeCount/routes/vars/xrpc/relativePath),
;; with route-count/routes/vars corrected to wrangler.jsonc's real values
;; and xrpc? corrected to reflect the dropped `main` (see namespace
;; docstring).

(def default-db
  {:app/title "Onion 0n10n001"
   :app/project "etzhayyim-project-onion"
   :app/name "etzhayyim-wasm-onion-0n10n001"
   :app/kind "wasm appview"
   :app/route-count 2
   :app/routes ["0n10n001.etzhayyim.com/*" "onion.etzhayyim.com/*"]
   :app/vars ["AGENTGATEWAY_MCP_ROUTER_URL" "APP_CAPABILITIES" "APP_DEPLOY_AT"
              "APP_DEPLOY_SHA" "APP_DESCRIPTION" "APP_DISPLAY_NAME" "APP_EMBED_URL"
              "APP_FRAMEWORK" "APP_NANOID" "APP_PERFORMER_TYPE" "APP_SOURCE"
              "APP_TEMPLATE" "APP_UI_TYPE" "APP_VERSION"]
   :app/xrpc? false
   :app/relative-path "wasm/etzhayyim-wasm-onion-0n10n001/cljs/src/onion/app.cljs"})

(rf/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(rf/reg-sub :app/title (fn [db _] (:app/title db)))
(rf/reg-sub :app/project (fn [db _] (:app/project db)))
(rf/reg-sub :app/name (fn [db _] (:app/name db)))
(rf/reg-sub :app/kind (fn [db _] (:app/kind db)))
(rf/reg-sub :app/route-count (fn [db _] (:app/route-count db)))
(rf/reg-sub :app/routes (fn [db _] (:app/routes db)))
(rf/reg-sub :app/vars (fn [db _] (:app/vars db)))
(rf/reg-sub :app/xrpc? (fn [db _] (:app/xrpc? db)))
(rf/reg-sub :app/relative-path (fn [db _] (:app/relative-path db)))

;; -- view ------------------------------------------------------------------

(defn app-view []
  (let [title         @(rf/subscribe [:app/title])
        name          @(rf/subscribe [:app/name])
        kind          @(rf/subscribe [:app/kind])
        project       @(rf/subscribe [:app/project])
        route-count   @(rf/subscribe [:app/route-count])
        routes        @(rf/subscribe [:app/routes])
        vars          @(rf/subscribe [:app/vars])
        xrpc?         @(rf/subscribe [:app/xrpc?])
        relative-path @(rf/subscribe [:app/relative-path])]
    (dds/container

     [:section {:class "dds-ext-section"}
      [:p {:class "dds-ext-lead"} (str "Cloudflare " kind)]
      (dds/heading 1 title)
      [:span {:class "dads-u-mono-16N-150"} name]]

     [:section {:class "dds-ext-section"}
      (dds/grid {:min "12rem"}
        (dds/card [:p {:class "dds-ext-lead"} "Project"] [:strong project])
        (dds/card [:p {:class "dds-ext-lead"} "Routes"] [:strong (str route-count)])
        (dds/card [:p {:class "dds-ext-lead"} "XRPC"]
                  [:strong (if xrpc? "enabled" "not configured")]))]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Public Routes" {:size "24"})
      (if (seq routes)
        (dds/card
         (into [:ul {:class "dds-ext-stack"}]
               (map (fn [r] [:li {:class "dads-u-mono-16N-150"} r]) routes)))
        [:p {:class "dds-ext-lead"} "No public route is declared next to this app surface."])]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Runtime Bindings" {:size "24"})
      (if (seq vars)
        (into [:div {:class "dds-ext-row"}]
              (map (fn [v] (dds/chip-label v {:color "blue"})) vars))
        [:p {:class "dds-ext-lead"} "No public vars are declared in the nearest wrangler config."])]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Source" {:size "24"})
      [:p {:class "dads-u-mono-16N-150"} relative-path]])))

;; -- mount -------------------------------------------------------------------

(defn render []
  (rdom/render [app-view] (.getElementById js/document "app")))

(defn ^:export main []
  (rf/dispatch-sync [:initialize-db])
  (render))
