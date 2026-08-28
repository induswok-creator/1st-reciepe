/* ==========================================================================
   INDUS WOK RESTAURANT BIBLE & CULINARY OPS MANUAL - CONTROLLER LOGIC
   Mobile-First & Touch-Optimized
   ========================================================================== */

let currentActiveRecipe = null;
let currentScaleFactor = 1;
let currentRecipeCatFilter = 'all';
let currentDietFilter = 'all';
let currentProteinFilter = 'all';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderFlagshipSpecials();
  renderKitchenPantry();
  renderBeginnerGuide();
  renderMotherSauces('all');
  renderMasterCuts();
  renderMisaModules();
  renderEmergencySubs();
  renderRecipeCatalog();
  updateCostingSimulation();
  setupTouchGestures();

  // Handle URL params if any
  const urlParams = new URLSearchParams(window.location.search);
  const dishParam = urlParams.get('dish');
  if (dishParam) {
    const found = window.INDUS_BIBLE.recipes.find(r => r.id === dishParam || r.name.toLowerCase().includes(dishParam.toLowerCase()));
    if (found) {
      openRecipeModal(found.id);
    }
  }
});

/* ==========================================================================
   RENDER 20 EXACT KITCHEN INVENTORY ITEMS
   ========================================================================== */
function renderKitchenPantry() {
  const container = document.getElementById('kitchenPantryGrid');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.pantry) return;

  const items = window.INDUS_BIBLE.pantry;
  container.innerHTML = items.map(item => `
    <div class="pantry-card clickable-pantry" onclick="openPantryModal('${item.id}')" title="Tap to learn how to use ${item.name} in simple words">
      <div class="pantry-icon">${item.icon}</div>
      <div class="pantry-info">
        <h5>${item.name}</h5>
        <span>${item.cat} · <strong style="color: var(--gold); font-size: 11px;">Tap Guide 👆</strong></span>
      </div>
    </div>
  `).join('');
}

// Tab Switcher (Synchronizes Desktop Tabs & Mobile Bottom Navigation)
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.mob-nav-item').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`tab-${tabId}`);
  if (targetPanel) targetPanel.classList.add('active');

  const targetDesktopBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (targetDesktopBtn) targetDesktopBtn.classList.add('active');

  const targetMobBtn = document.querySelector(`.mob-nav-item[data-tab="${tabId}"]`);
  if (targetMobBtn) targetMobBtn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Kitchen Wok Mode
function toggleKitchenMode() {
  const isDark = document.body.classList.toggle('kitchen-mode');
  const btn = document.getElementById('btnWokMode');
  if (btn) {
    btn.classList.toggle('active', isDark);
    btn.innerHTML = isDark ? `<span>☀️</span> <span class="hide-mobile">Day Mode</span>` : `<span>🔥</span> <span class="hide-mobile">Wok Mode</span>`;
  }
}

/* ==========================================================================
   RENDER 4 INDUS WOK FLAGSHIP SPECIALS
   ========================================================================== */
function renderFlagshipSpecials() {
  const container = document.getElementById('specialsContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.specials) return;

  const specials = window.INDUS_BIBLE.specials;

  container.innerHTML = specials.map(s => `
    <div class="special-card">
      <div class="special-img-wrap">
        <img src="${s.image}" alt="${s.dishName}" loading="lazy">
        <span class="special-badge-tag">${s.category} SPECIAL</span>
        <span class="special-price-tag">₹${s.menuPrice}.00</span>
      </div>
      <div class="special-body">
        <h3 class="special-dish-title">${s.dishName}</h3>
        <p class="special-flavor-desc">${s.flavorProfile}</p>
        
        <div class="finance-pills">
          <div class="fin-pill">
            <div class="lbl">Raw Cost</div>
            <div class="val val-red">₹${s.foodCost.toFixed(2)}</div>
          </div>
          <div class="fin-pill">
            <div class="lbl">Food Cost %</div>
            <div class="val val-green">${s.foodCostPct.toFixed(1)}%</div>
          </div>
          <div class="fin-pill">
            <div class="lbl">Gross Profit</div>
            <div class="val val-green">₹${s.grossMargin.toFixed(0)} (${s.grossMarginPct.toFixed(1)}%)</div>
          </div>
        </div>

        <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 10px;">
          <strong>Portion Standard:</strong> ${s.portionSize}
        </div>

        <button class="special-expand-btn" onclick="toggleSpecialDetails('${s.id}')">
          <span id="btnText-${s.id}">🔍 View BOM Costing & Prep Sequence</span>
          <span id="btnIcon-${s.id}">▼</span>
        </button>

        <div class="special-details-drawer" id="details-${s.id}">
          <h4 style="font-size: 12.5px; font-weight: 800; color: var(--charcoal); margin-bottom: 6px;">
            📋 Itemized Bill of Materials (BOM) Cost Breakdown
          </h4>
          <div class="bom-table-wrap">
            <table class="bom-table">
              <thead>
                <tr>
                  <th>Ingredient & Spec</th>
                  <th>Kitchen Qty</th>
                  <th>Unit Rate</th>
                  <th>Raw Cost (₹)</th>
                </tr>
              </thead>
              <tbody>
                ${s.bom.map(b => `
                  <tr>
                    <td>${b.ingredient}</td>
                    <td>${b.qty}</td>
                    <td>${b.unitRate}</td>
                    <td>₹${b.cost.toFixed(2)}</td>
                  </tr>
                `).join('')}
                <tr class="total-row">
                  <td colspan="3"><strong>TOTAL RAW FOOD COST PER PORTION</strong></td>
                  <td><strong>₹${s.foodCost.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="font-size: 12.5px; font-weight: 800; color: var(--red); margin-bottom: 4px;">
            🔥 Standardized Wok Prep Sequence
          </h4>
          <ol class="steps-ol" style="font-size: 12px; margin-bottom: 12px;">
            ${s.prepSequence.map(step => `<li>${step}</li>`).join('')}
          </ol>

          <div style="background: var(--gold-light); padding: 8px 10px; border-radius: 6px; border: 1px solid var(--gold-border); font-size: 11.5px; color: #7b5906;">
            <strong>⭐ Why This is an Indus Special:</strong> ${s.whySpecial}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleSpecialDetails(specialId) {
  const drawer = document.getElementById(`details-${specialId}`);
  const btnText = document.getElementById(`btnText-${specialId}`);
  const btnIcon = document.getElementById(`btnIcon-${specialId}`);

  if (!drawer) return;

  const isOpen = drawer.classList.toggle('open');
  if (btnText) btnText.textContent = isOpen ? '▲ Hide Details' : '🔍 View BOM Costing & Prep Sequence';
  if (btnIcon) btnIcon.textContent = isOpen ? '▲' : '▼';
}

/* ==========================================================================
   RENDER 14 MOTHER SAUCES
   ========================================================================== */
function filterSauces(category) {
  document.querySelectorAll('#sauceCategoryFilters .sauce-chip').forEach(chip => chip.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  renderMotherSauces(category);
}

function renderMotherSauces(filterCat) {
  const container = document.getElementById('saucesListContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.sauces) return;

  const allSauces = window.INDUS_BIBLE.sauces;
  const filtered = (filterCat === 'all') ? allSauces : allSauces.filter(s => s.category === filterCat);

  container.innerHTML = filtered.map(sauce => `
    <div class="sauce-card" id="${sauce.id}">
      <div class="sauce-header">
        <div class="sauce-title-box">
          <h3>${sauce.name}</h3>
          <div style="font-size: 12px; color: var(--text-muted);">${sauce.description}</div>
        </div>
        <div class="sauce-badges">
          <span class="badge-tag badge-gold">Yield: ${sauce.yield}</span>
          <span class="badge-tag">Prep: ${sauce.prepTime} | Cook: ${sauce.cookTime}</span>
          <span class="badge-tag" style="color:var(--red); font-weight:800;">${sauce.spiceLevel}</span>
        </div>
      </div>

      <div class="sauce-grid-content">
        <!-- Ingredients Column -->
        <div class="ing-list-box">
          <h4><span>🧂</span> Raw Scratch Ingredients (Standard Batch)</h4>
          <ul class="ing-ul">
            ${sauce.ingredients.map(ing => `
              <li>
                <span>${ing.item}</span>
                <strong style="color:var(--red);">${ing.qty}</strong>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Method Steps Column -->
        <div class="method-steps-box">
          <h4><span>🔥</span> Standardized Master Preparation Method</h4>
          <ol class="steps-ol">
            ${sauce.method.map(m => `<li>${m}</li>`).join('')}
          </ol>
        </div>
      </div>

      <div class="sauce-emergency-alert">
        <span style="font-size: 18px;">⚡</span>
        <div>
          <strong>60-Second Kitchen Emergency Substitute:</strong>
          <div>${sauce.emergencySub}</div>
        </div>
      </div>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px; font-size: 11px; color: var(--text-muted); padding-top: 8px; border-top: 1px solid var(--border-light);">
        <span><strong>🧊 Storage & HACCP:</strong> ${sauce.shelfLife}</span>
        <span><strong>🔬 Quality KPI:</strong> ${sauce.qualityChecks}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER MASTER KNIFE CUTS & TECHNICAL DIAGRAMS
   ========================================================================== */
function filterMisaView(view) {
  document.querySelectorAll('#misaFilterChips .sauce-chip').forEach(chip => chip.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  const cutsSection = document.getElementById('misaCutsSection');
  const modulesSection = document.getElementById('misaModulesSection');

  if (view === 'all') {
    if (cutsSection) cutsSection.style.display = 'block';
    if (modulesSection) modulesSection.style.display = 'block';
    renderMisaModules('all');
  } else if (view === 'cuts') {
    if (cutsSection) cutsSection.style.display = 'block';
    if (modulesSection) modulesSection.style.display = 'none';
  } else {
    if (cutsSection) cutsSection.style.display = 'none';
    if (modulesSection) modulesSection.style.display = 'block';
    renderMisaModules(view);
  }
}

function renderMasterCuts() {
  const container = document.getElementById('cutsMasterContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.cuts) return;

  const cuts = window.INDUS_BIBLE.cuts;

  container.innerHTML = cuts.map(cut => `
    <div class="cut-detail-card" id="${cut.id}">
      <div class="cut-card-top-banner">
        <div class="cut-title-row">
          <div>
            <h3>${cut.name}</h3>
            <div class="cut-hindi-badge">${cut.hindiName}</div>
          </div>
          <span class="cut-dim-tag">${cut.dimension}</span>
        </div>
        <div class="cut-diagram-wrap">
          ${cut.svgDiagram}
        </div>
      </div>

      <div class="cut-card-body">
        <div class="cut-info-block">
          <h4><span>💡</span> What is it?</h4>
          <p>${cut.whatIsIt}</p>
        </div>

        <div class="cut-info-block">
          <h4><span>🥢</span> Why is it used at Indus Wok?</h4>
          <p>${cut.whyUsed}</p>
          <div style="font-size: 11.5px; color: var(--gold); font-weight: 700; margin-top: 6px;">
            Target Dishes: ${cut.targetDishes}
          </div>
        </div>

        <div class="cut-info-block">
          <h4><span>🔪</span> Step-by-Step Cutting Sequence (Knife Angle: ${cut.knifeAngle})</h4>
          <ol class="cut-steps-ol">
            ${cut.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>

        <div class="cut-pitfall-alert">
          <strong>⚠️ Common Knife Mistakes & Pitfalls:</strong> ${cut.commonMistakes}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER MISE EN PLACE ("MISA") MANUAL
   ========================================================================== */
function renderMisaModules(filterMod = 'all') {
  const container = document.getElementById('misaContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.misa) return;

  let modules = window.INDUS_BIBLE.misa.modules;

  if (filterMod === 'protein') {
    modules = modules.filter(m => m.id === 'misa-2');
  } else if (filterMod === 'carbs') {
    modules = modules.filter(m => m.id === 'misa-3');
  } else if (filterMod === 'station') {
    modules = modules.filter(m => m.id === 'misa-4' || m.id === 'misa-5');
  }

  container.innerHTML = modules.map(mod => `
    <div class="misa-module-card">
      <div class="misa-mod-header">
        <div class="misa-mod-icon">${mod.icon}</div>
        <div class="misa-mod-title">
          <span class="badge-tag badge-gold" style="font-size: 9.5px; text-transform: uppercase;">${mod.badge}</span>
          <h3>${mod.title}</h3>
        </div>
      </div>
      <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 12px;">${mod.description}</p>

      <div class="misa-sub-list">
        ${mod.standards ? mod.standards.map(st => `
          <div class="misa-sub-item">
            <h5>${st.cutName}</h5>
            <div style="font-size: 11px; color: var(--gold); font-weight: 700; margin-bottom: 3px;">Target: ${st.targetDishes}</div>
            <p><strong>Dimension & Spec:</strong> ${st.specs}</p>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;"><em>Why it matters:</em> ${st.importance}</p>
          </div>
        `).join('') : ''}

        ${mod.protocols ? mod.protocols.map(pr => `
          <div class="misa-sub-item">
            <h5>${pr.protein || pr.carb}</h5>
            ${pr.rawPrep ? `<p><strong>Raw Prep:</strong> ${pr.rawPrep}</p>` : ''}
            ${pr.marinade ? `<p><strong>Master Marinade:</strong> ${pr.marinade}</p>` : ''}
            ${pr.oilPass ? `<p style="color:var(--red);"><strong>Oil/Heat Pass:</strong> ${pr.oilPass}</p>` : ''}
            ${pr.boilTime ? `<p><strong>Boiling Standard:</strong> ${pr.boilTime}</p>` : ''}
            ${pr.shockCool ? `<p><strong>Shock Cooling:</strong> ${pr.shockCool}</p>` : ''}
            ${pr.refrigeration ? `<p><strong>Overnight Retrogradation:</strong> ${pr.refrigeration}</p>` : ''}
          </div>
        `).join('') : ''}

        ${mod.guidelines ? mod.guidelines.map(gl => `
          <div class="misa-sub-item">
            <h5>${gl.title}</h5>
            <p>${gl.detail}</p>
          </div>
        `).join('') : ''}

        ${mod.checklist ? `
          <div class="misa-sub-item">
            <ul style="padding-left: 16px; font-size: 12px; display: flex; flex-direction: column; gap: 5px;">
              ${mod.checklist.map(ch => `<li>${ch}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER FULL MENU RECIPE CATALOG (283 ITEMS)
   ========================================================================== */
function filterRecipeCat(cat) {
  currentRecipeCatFilter = cat;
  document.querySelectorAll('#recipeCatFilters .cat-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  renderRecipeCatalog();
}

function filterDiet(diet) {
  currentDietFilter = diet;
  document.querySelectorAll('.sub-filter-row .filter-btn-pill').forEach(btn => {
    if (btn.id === 'btnDietAll' || btn.id === 'btnDietVeg' || btn.id === 'btnDietNonVeg') {
      btn.classList.remove('active');
    }
  });
  if (diet === 'all') document.getElementById('btnDietAll').classList.add('active');
  if (diet === 'veg') document.getElementById('btnDietVeg').classList.add('active');
  if (diet === 'nonveg') document.getElementById('btnDietNonVeg').classList.add('active');
  renderRecipeCatalog();
}

function filterProtein(protein) {
  currentProteinFilter = (currentProteinFilter === protein) ? 'all' : protein;
  renderRecipeCatalog();
}

function handleRecipeSearch() {
  const input = document.getElementById('recipeSearchInput');
  const clearBtn = document.getElementById('btnSearchClear');
  if (clearBtn) {
    clearBtn.style.display = input.value.trim().length > 0 ? 'flex' : 'none';
  }
  renderRecipeCatalog();
}

function clearRecipeSearch() {
  const input = document.getElementById('recipeSearchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('btnSearchClear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderRecipeCatalog();
}

function renderRecipeCatalog() {
  const container = document.getElementById('recipesCatalogGrid');
  const countDisplay = document.getElementById('recipeCountDisplay');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.recipes) return;

  const query = (document.getElementById('recipeSearchInput').value || '').trim().toLowerCase();
  const allRecipes = window.INDUS_BIBLE.recipes;

  let filtered = allRecipes.filter(dish => {
    // Category match
    if (currentRecipeCatFilter !== 'all' && dish.cat !== currentRecipeCatFilter) return false;

    // Diet match
    if (currentDietFilter === 'veg' && dish.veg !== 'veg') return false;
    if (currentDietFilter === 'nonveg' && dish.veg !== 'nonveg') return false;

    // Protein match
    if (currentProteinFilter !== 'all') {
      const matchName = dish.name.toLowerCase().includes(currentProteinFilter.toLowerCase());
      const matchSub = (dish.sub || '').toLowerCase().includes(currentProteinFilter.toLowerCase());
      if (!matchName && !matchSub) return false;
    }

    // Text query search
    if (query) {
      const matchTitle = dish.name.toLowerCase().includes(query);
      const matchCat = dish.cat.toLowerCase().includes(query);
      const matchSub = (dish.sub || '').toLowerCase().includes(query);
      if (!matchTitle && !matchCat && !matchSub) return false;
    }

    return true;
  });

  if (countDisplay) {
    countDisplay.textContent = `${filtered.length} of ${allRecipes.length} dishes`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 16px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-line);">
        <div style="font-size: 32px; margin-bottom: 6px;">🔍</div>
        <h3 style="color: var(--charcoal); font-size: 15px;">No dishes match your filters</h3>
        <p style="color: var(--text-muted); font-size: 12px; margin-top: 4px;">Try searching for "Fried Rice", "Manchurian", "Lollipop", or "Hakka".</p>
        <button class="cat-filter-btn" style="margin-top: 10px;" onclick="resetRecipeFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(dish => `
    <div class="dish-grid-card" onclick="openRecipeModal('${dish.id}')">
      <div class="dish-card-img-thumb">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        <span class="veg-indicator ${dish.veg}"></span>
        <span class="dish-price-badge">₹${dish.fullPrice || 250}</span>
      </div>
      <div class="dish-card-content">
        <div class="dish-card-cat-name">${dish.cat} ${dish.sub ? '• ' + dish.sub : ''}</div>
        <h4 class="dish-card-title">${dish.name}</h4>
        
        <div class="card-sauce-badge" title="${dish.primarySauceName}">
          🥣 ${dish.primarySauceName.split('(')[0].replace('Indus', '').replace('Mother', '').trim()}
        </div>

        <div class="dish-meta-pills">
          <span>⏱️ ${dish.cookTime}</span>
          <span style="color:var(--green); font-weight:700;">₹${dish.costing.rawCost.toFixed(0)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function resetRecipeFilters() {
  document.getElementById('recipeSearchInput').value = '';
  currentRecipeCatFilter = 'all';
  currentDietFilter = 'all';
  currentProteinFilter = 'all';
  document.querySelectorAll('#recipeCatFilters .cat-filter-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });
  renderRecipeCatalog();
}

/* ==========================================================================
   PER-PAGE DEDICATED RECIPE MODAL & BATCH SCALING
   ========================================================================== */
function openRecipeModal(recipeId) {
  const recipe = window.INDUS_BIBLE.recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  currentActiveRecipe = recipe;
  currentScaleFactor = 1;

  document.getElementById('modalDishTitle').textContent = recipe.name;
  document.getElementById('modalDishMainHeading').textContent = recipe.name;
  document.getElementById('modalCategoryBadge').textContent = `${recipe.cat} ${recipe.sub ? '• ' + recipe.sub : ''}`;
  
  const dietBadge = document.getElementById('modalDietBadge');
  dietBadge.className = `veg-indicator ${recipe.veg}`;

  document.getElementById('modalDishImg').src = recipe.image;
  document.getElementById('modalDishImg').alt = recipe.name;

  document.getElementById('modalSellingPrice').textContent = `₹${recipe.fullPrice || 250}.00`;
  document.getElementById('modalRawCost').textContent = `₹${recipe.costing.rawCost.toFixed(2)} (${recipe.costing.foodCostPct}%)`;
  document.getElementById('modalTimeSpec').textContent = `${recipe.prepTime} / ${recipe.cookTime}`;
  document.getElementById('modalFlameSpec').textContent = recipe.wokHeat;

  // Set Primary Mother Sauce Base info
  const sauceTitle = document.getElementById('modalSauceTitle');
  const sauceUsage = document.getElementById('modalSauceUsage');
  if (sauceTitle && recipe.primarySauceName) {
    sauceTitle.textContent = recipe.primarySauceName;
  }
  if (sauceUsage && recipe.primarySauceQty) {
    sauceUsage.innerHTML = `Standard Kitchen Dose: <strong>${recipe.primarySauceQty}</strong> • ${recipe.primarySauceStage || 'Stage 2 (Aromatics Sauté)'}`;
  }

  document.getElementById('modalPlatingText').textContent = recipe.plating || 'Serve piping hot in Indus Wok branded presentation tableware with fresh garnish.';
  document.getElementById('modalChefTipText').textContent = recipe.chefTip || 'Maintain extreme wok heat for signature smokiness and preserve vegetable crispness.';

  // Render Misa List
  const misaList = document.getElementById('modalMisaList');
  misaList.innerHTML = recipe.misaRequired.map(m => `
    <span class="misa-tag">✓ ${m}</span>
  `).join('');

  // Reset portion scaler buttons
  document.querySelectorAll('.scaler-btn').forEach(btn => btn.classList.remove('active'));
  const b1 = document.getElementById('btnScale1');
  if (b1) b1.classList.add('active');
  const portionLabel = document.getElementById('scalerCurrentPortion');
  if (portionLabel) portionLabel.textContent = '1x Single Order';

  // Render Scaled Ingredients
  renderScaledIngredients();

  // Render Cooking Steps
  const stepsList = document.getElementById('modalCookingSteps');
  stepsList.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');

  // Open Modal
  document.getElementById('recipeModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function scaleRecipe(factor) {
  currentScaleFactor = factor;
  document.querySelectorAll('.scaler-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnScale${factor}`);
  if (activeBtn) activeBtn.classList.add('active');

  const portionLabel = document.getElementById('scalerCurrentPortion');
  if (portionLabel) {
    if (factor === 1) portionLabel.textContent = '1x Single Order';
    else if (factor === 2) portionLabel.textContent = '2x Double Batch';
    else if (factor === 5) portionLabel.textContent = '5x Rush Hour Batch';
    else if (factor === 10) portionLabel.textContent = '10x Catering Batch';
  }

  renderScaledIngredients();
}

function renderScaledIngredients() {
  if (!currentActiveRecipe) return;

  const ingList = document.getElementById('modalIngredientsList');
  const factor = currentScaleFactor;

  ingList.innerHTML = currentActiveRecipe.ingredients.map(ing => {
    // parse quantity number if possible
    const numMatch = ing.qty.match(/([0-9.]+)/);
    let scaledQty = ing.qty;
    if (numMatch) {
      const origVal = parseFloat(numMatch[1]);
      const scaledVal = (origVal * factor).toFixed(origVal % 1 === 0 ? 0 : 1);
      scaledQty = ing.qty.replace(numMatch[1], scaledVal);
    }
    const scaledCost = (ing.cost * factor).toFixed(2);

    return `
      <li>
        <span>${ing.item}</span>
        <strong style="color:var(--red); font-weight:800;">${scaledQty} <span style="font-size:10px; color:var(--text-muted); font-weight:normal;">(₹${scaledCost})</span></strong>
      </li>
    `;
  }).join('');
}

function closeRecipeModal() {
  document.getElementById('recipeModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function jumpToSauceRecipe() {
  if (!currentActiveRecipe || !currentActiveRecipe.primarySauceId) return;
  const targetSauceId = currentActiveRecipe.primarySauceId;
  closeRecipeModal();
  switchTab('sauces');
  setTimeout(() => {
    // filter to all sauces so target is visible
    renderMotherSauces('all');
    document.querySelectorAll('#sauceCategoryFilters .sauce-chip').forEach((c, idx) => {
      c.classList.toggle('active', idx === 0);
    });
    const targetEl = document.getElementById(targetSauceId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetEl.style.transition = 'box-shadow 0.3s, transform 0.3s';
      targetEl.style.boxShadow = '0 0 0 3px #b91327, 0 10px 30px rgba(185,19,39,0.35)';
      targetEl.style.transform = 'scale(1.02)';
      setTimeout(() => {
        targetEl.style.boxShadow = '';
        targetEl.style.transform = '';
      }, 3500);
    }
  }, 350);
}

function navigateRecipe(direction) {
  if (!currentActiveRecipe || !window.INDUS_BIBLE || !window.INDUS_BIBLE.recipes) return;
  const recipes = window.INDUS_BIBLE.recipes;
  const currentIndex = recipes.findIndex(r => r.id === currentActiveRecipe.id);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = recipes.length - 1;
  if (newIndex >= recipes.length) newIndex = 0;

  openRecipeModal(recipes[newIndex].id);
}

function handleModalOutsideClick(e) {
  if (e.target.id === 'recipeModalOverlay') {
    closeRecipeModal();
  }
}

function printModalRecipe() {
  window.print();
}

// Mobile Touch Swipe Gesture Support inside Modal
function setupTouchGestures() {
  let touchStartX = 0;
  let touchEndX = 0;
  const modalDialog = document.getElementById('recipeModalDialog');

  if (modalDialog) {
    modalDialog.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalDialog.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 75) {
      if (diff > 0) {
        // Swiped Right -> Prev
        navigateRecipe(-1);
      } else {
        // Swiped Left -> Next
        navigateRecipe(1);
      }
    }
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('recipeModalOverlay');
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'Escape') closeRecipeModal();
      if (e.key === 'ArrowLeft') navigateRecipe(-1);
      if (e.key === 'ArrowRight') navigateRecipe(1);
    }
  });
}

/* ==========================================================================
   RENDER EMERGENCY MISSING MATRIX
   ========================================================================== */
function renderEmergencySubs() {
  const container = document.getElementById('emergencySubsContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.emergencySubs) return;

  const subs = window.INDUS_BIBLE.emergencySubs;

  container.innerHTML = subs.map(item => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-line); border-radius: var(--radius-md); padding: 14px; box-shadow: var(--shadow-sm);">
      <div style="font-size: 10px; font-weight: 800; color: var(--red); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">MISSING INGREDIENT:</div>
      <h4 style="font-size: 14.5px; font-weight: 800; color: var(--charcoal); margin-bottom: 8px;">${item.missing}</h4>
      <div style="background: var(--gold-light); padding: 10px; border-radius: 6px; border: 1px solid var(--gold-border); font-size: 12px; color: #7b5906; line-height: 1.45;">
        <strong>⚡ 60-Sec Chef Fix:</strong> ${item.substitute}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   INTERACTIVE COSTING SIMULATOR
   ========================================================================== */
function updateCostingSimulation() {
  const chickenRate = parseFloat(document.getElementById('inputChickenRate').value);
  const paneerRate = parseFloat(document.getElementById('inputPaneerRate').value);
  const riceRate = parseFloat(document.getElementById('inputRiceRate').value);
  const oilRate = parseFloat(document.getElementById('inputOilRate').value);
  const packRate = parseFloat(document.getElementById('inputPackRate').value);
  const targetFc = parseFloat(document.getElementById('inputTargetFc').value);

  // Update slider label text
  document.getElementById('valChickenRate').textContent = `₹${chickenRate} / kg`;
  document.getElementById('valPaneerRate').textContent = `₹${paneerRate} / kg`;
  document.getElementById('valRiceRate').textContent = `₹${riceRate} / kg`;
  document.getElementById('valOilRate').textContent = `₹${oilRate} / L`;
  document.getElementById('valPackRate').textContent = `₹${packRate.toFixed(2)}`;
  document.getElementById('valTargetFc').textContent = `${targetFc.toFixed(1)}%`;

  // Calculate simulated average food cost %
  const baseAvgFoodCost = (chickenRate * 0.10) + (paneerRate * 0.04) + (riceRate * 0.08) + (oilRate * 0.03) + packRate + 15.0;
  const avgSellingPrice = 290.0;
  const computedFcPct = (baseAvgFoodCost / avgSellingPrice) * 100;
  const computedMarginPct = 100 - computedFcPct;

  const monthlyOrders = 1200;
  const monthlyRevenue = monthlyOrders * avgSellingPrice;
  const monthlyGrossProfit = monthlyRevenue * (computedMarginPct / 100);

  document.getElementById('simAvgFoodCost').textContent = `${computedFcPct.toFixed(1)}%`;
  document.getElementById('simAvgMargin').textContent = `${computedMarginPct.toFixed(1)}%`;
  document.getElementById('simEstRevenue').textContent = `₹${monthlyRevenue.toLocaleString('en-IN')}`;
  document.getElementById('simEstGrossProfit').textContent = `₹${Math.round(monthlyGrossProfit).toLocaleString('en-IN')}`;

  const recBox = document.getElementById('simRecommendationText');
  if (computedFcPct <= targetFc) {
    recBox.innerHTML = `✅ <strong>Optimal:</strong> Food cost of <strong>${computedFcPct.toFixed(1)}%</strong> meets target (&le;${targetFc}%). Continue monitoring chicken portion weights on scales.`;
  } else {
    recBox.innerHTML = `⚠️ <strong>Warning:</strong> Food cost of <strong>${computedFcPct.toFixed(1)}%</strong> exceeds target (${targetFc}%). Recommend adjusting prices upward by ~₹15.`;
  }
}


/* ==========================================================================
   BEGINNER 101 MASTERCLASS & JARGON GLOSSARY CONTROLLER
   ========================================================================== */
function renderBeginnerGuide() {
  const guide = window.INDUS_BIBLE && window.INDUS_BIBLE.beginnerGuide;
  if (!guide) return;

  // 1. Golden Rules
  const rulesContainer = document.getElementById('goldenRulesContainer');
  if (rulesContainer && guide.sixRules) {
    rulesContainer.innerHTML = guide.sixRules.map(rule => `
      <div class="golden-rule-card">
        <div class="golden-rule-header">
          <div class="golden-rule-num">${rule.num}</div>
          <h4>${rule.title}</h4>
        </div>
        <p class="golden-rule-desc">${rule.desc}</p>
      </div>
    `).join('');
  }

  // 2. Glossary
  renderJargonGlossary(guide.glossary);

  // 3. Ladle Chart
  const ladleContainer = document.getElementById('ladleChartContainer');
  if (ladleContainer && guide.ladleGuide) {
    ladleContainer.innerHTML = guide.ladleGuide.map(item => `
      <div class="ladle-card">
        <div class="ladle-tool-name">🥄 ${item.tool}</div>
        <div class="ladle-approx">${item.approx}</div>
        <div class="ladle-use">${item.use}</div>
      </div>
    `).join('');
  }

  // 4. Blueprint Timeline
  const bpContainer = document.getElementById('blueprintTimelineContainer');
  if (bpContainer && guide.threeStepFlow) {
    bpContainer.innerHTML = guide.threeStepFlow.map((step, idx) => `
      <div class="blueprint-step-card">
        <div class="blueprint-step-badge">STAGE ${idx + 1}</div>
        <div class="blueprint-step-content">
          <h4>${step.step}</h4>
          <p>${step.action}</p>
        </div>
      </div>
    `).join('');
  }
}

function renderJargonGlossary(items) {
  const container = document.getElementById('jargonGlossaryContainer');
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; padding: 24px; text-align: center; color: var(--text-muted);">No matching culinary terms found. Try typing 'velvet', 'wok', 'maggi', or 'slurry'.</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="jargon-card">
      <div class="jargon-card-top">
        <span class="jargon-icon">${item.icon}</span>
        <div>
          <h4 class="jargon-title">${item.term}</h4>
          <span class="jargon-pronounce">🗣️ Say: <em>${item.pronunciation}</em></span>
        </div>
      </div>
      
      <div class="jargon-section simple-box">
        <div class="jargon-label">💡 In Simple Words:</div>
        <div class="jargon-val">${item.simple}</div>
      </div>

      <div class="jargon-section">
        <div class="jargon-label">❓ Why Chefs Do This:</div>
        <div class="jargon-val">${item.why}</div>
      </div>

      <div class="jargon-section how-box">
        <div class="jargon-label">👨‍🍳 How to Do It:</div>
        <div class="jargon-val">${item.how}</div>
      </div>
    </div>
  `).join('');
}

function filterJargonGlossary() {
  const query = (document.getElementById('jargonSearchInput')?.value || '').toLowerCase().trim();
  const allItems = (window.INDUS_BIBLE && window.INDUS_BIBLE.beginnerGuide && window.INDUS_BIBLE.beginnerGuide.glossary) || [];
  if (!query) {
    renderJargonGlossary(allItems);
    return;
  }
  const filtered = allItems.filter(item => 
    item.term.toLowerCase().includes(query) ||
    item.simple.toLowerCase().includes(query) ||
    item.why.toLowerCase().includes(query) ||
    item.how.toLowerCase().includes(query)
  );
  renderJargonGlossary(filtered);
}

function openPantryModal(pantryId) {
  const item = window.INDUS_BIBLE && window.INDUS_BIBLE.pantry && window.INDUS_BIBLE.pantry.find(p => p.id === pantryId);
  if (!item) return;

  document.getElementById('pantryModalIcon').textContent = item.icon || '🧂';
  document.getElementById('pantryModalName').textContent = item.name;
  document.getElementById('pantryModalCat').textContent = item.cat;

  const usedInSauces = ((window.INDUS_BIBLE && window.INDUS_BIBLE.sauces) || []).filter(s => 
    s.ingredients.some(ing => ing.item.toLowerCase().includes(item.name.toLowerCase()) || item.name.toLowerCase().includes(ing.item.toLowerCase()))
  );

  const body = document.getElementById('pantryModalBody');
  body.innerHTML = `
    <div class="pantry-modal-details">
      <div class="pantry-detail-row">
        <div class="pantry-detail-label" style="font-weight: 700; color: var(--text-muted); font-size: 13px; text-transform: uppercase;">👅 Taste & Flavor Profile:</div>
        <div class="pantry-detail-value" style="font-size: 15px; font-weight: 600; color: var(--red); margin-top: 4px;">${item.simpleTaste || 'Savory restaurant seasoning'}</div>
      </div>

      <div class="pantry-detail-row" style="margin-top: 14px;">
        <div class="pantry-detail-label" style="font-weight: 700; color: var(--text-muted); font-size: 13px; text-transform: uppercase;">🍳 What It Does in Your Dishes (Simple Words):</div>
        <div class="pantry-detail-value" style="margin-top: 4px; line-height: 1.5; color: var(--text-main);">${item.simpleRole || 'Enhances the savory depth and authentic restaurant aroma.'}</div>
      </div>

      <div class="pantry-detail-row" style="margin-top: 14px; background: var(--gold-light); border: 1px solid var(--gold-border); padding: 14px; border-radius: var(--radius-sm);">
        <div class="pantry-detail-label" style="color: #8c6310; font-weight: 700; font-size: 13px;">💡 Beginner Chef Tip:</div>
        <div class="pantry-detail-value" style="color: #593e06; font-weight: 500; margin-top: 4px; line-height: 1.5;">${item.beginnerTip || 'Use as directed in recipes for balanced flavor.'}</div>
      </div>

      ${usedInSauces.length > 0 ? `
        <div class="pantry-detail-row" style="margin-top: 16px;">
          <div class="pantry-detail-label" style="font-weight: 700; color: var(--text-muted); font-size: 13px; text-transform: uppercase; margin-bottom: 8px;">🥣 Used in These Mother Sauces:</div>
          <div class="pantry-sauce-chips" style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${usedInSauces.map(s => `
              <span class="sauce-pill-chip" style="background: var(--red-light); color: var(--red); border: 1px solid rgba(185,19,39,0.2); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer;" onclick="closePantryModal(); switchTab('sauces');">${s.name}</span>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('pantryModalOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePantryModal() {
  const overlay = document.getElementById('pantryModalOverlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

function handlePantryModalOutsideClick(e) {
  if (e.target.id === 'pantryModalOverlay') {
    closePantryModal();
  }
}
