(ns cloud-itonami.onion.ui
  "View tree for the onion appview. Ported 1:1 from the former
  wasm/etzhayyim-wasm-onion-0n10n001/svelte/src/routes/+page.svelte (template
  shell screen). Structural chrome comes from appkit.core / kotoba-ui.core
  (murakumo-studio構成); panels are hand-rolled hiccup styled with kotoba-ui's
  exposed class-name, mirroring cloud-itonami.sanctions.ui /
  cloud-itonami.crypto-asset-freeze.ui."
  (:require [appkit.core :as shape]
            [kotoba-ui.core :as ui]
            [cloud-itonami.onion.state :as state]))

(def css-text
  "
.onion-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }
.onion-top { margin-bottom: 18px; }
.onion-top p, .onion-top span, .onion-muted, .onion-app h2, .onion-facts span { color: #96a6b8; }
.onion-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
.onion-app h1, .onion-app h2, .onion-app p { margin: 0; }
.onion-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }
.onion-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }
.onion-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }
.onion-facts > div, .onion-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }
.onion-facts > div { padding: 14px; }
.onion-facts span { display: block; margin-bottom: 8px; font-size: 12px; }
.onion-facts strong { overflow-wrap: anywhere; }
.onion-panel { margin-bottom: 12px; padding: 16px; }
.onion-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }
.onion-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.onion-app li, .onion-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }
.onion-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
@media (max-width: 760px) { .onion-app { padding: 18px; } .onion-facts { grid-template-columns: 1fr; } }
")

(defn- panel [title body]
  [:section.onion-panel
   [:h2 title]
   body])

(defn- facts [app]
  [:section.onion-facts
   [:div [:span "Project"] [:strong (:project app)]]
   [:div [:span "Routes"] [:strong (:route-count app)]]
   [:div [:span "XRPC"] [:strong (if (:xrpc? app) "enabled" "not configured")]]])

(defn- public-routes [{:keys [routes]}]
  [panel "Public Routes"
   (if (seq routes)
     [:ul (for [r routes] ^{:key r} [:li r])]
     [:p.onion-muted "No public route is declared next to this app surface."])])

(defn- runtime-bindings [{:keys [vars]}]
  [panel "Runtime Bindings"
   (if (seq vars)
     [:ul.onion-chips (for [k vars] ^{:key k} [:li k])]
     [:p.onion-muted "No public vars are declared in the nearest wrangler config."])])

(defn- source [{:keys [relative-path]}]
  [:section.onion-panel.onion-path
   [:h2 "Source"]
   [:p relative-path]])

;; root

(defn root []
  (let [{:keys [app]} @state/state]
    [:div
     [:style css-text]
     [shape/panel
      [:main.onion-app
       [:section.onion-top
        [:p (str "Cloudflare " (:kind app))]
        [:h1 (:title app)]
        [:span (:name app)]]
       [facts app]
       [public-routes app]
       [runtime-bindings app]
       [source app]]]]))
