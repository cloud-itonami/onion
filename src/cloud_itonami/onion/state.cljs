(ns cloud-itonami.onion.state
  "App state for the onion appview UI. Ported 1:1 from the former
  wasm/etzhayyim-wasm-onion-0n10n001/svelte/src/routes/+page.svelte template
  shell — a single static screen describing the app surface (title / project /
  routes / bindings / source path). Single reagent atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Onion 0n10n001"
          :project "etzhayyim-project-onion"
          :name "etzhayyim-wasm-onion-0n10n001"
          :kind "wasm appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-onion/wasm/etzhayyim-wasm-onion-0n10n001/svelte/src/routes/+page.svelte"}}))
