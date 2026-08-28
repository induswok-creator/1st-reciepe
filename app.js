/* ==========================================================================
   INDUS WOK RESTAURANT BIBLE & CULINARY OPS MANUAL - CONTROLLER LOGIC
   ========================================================================== */

let currentActiveRecipe = null;
let currentScaleFactor = 1;
let currentRecipeCatFilter = 'all';
let currentDietFilter = 'all';
let currentProteinFilter = 'all';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderFlagshipSpecials();
  renderMotherSauces('all');
  renderMisaModules();
  renderEmergencySubs();
  renderRecipeCatalog();
  updateCostingSimulation();

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

// Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`tab-${tabId}`);
  if (targetPanel) targetPanel.classList.add('active');

  const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

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
            <div class="lbl">Raw Food Cost</div>
            <div class="val val-red">₹${s.foodCost.toFixed(2)}</div>
          </div>
          <div class="fin-pill">
            <div class="lbl">Food Cost %</div>
            <div class="val val-green">${s.foodCostPct.toFixed(1)}%</div>
          </div>
          <div class="fin-pill">
            <div class="lbl">Gross Margin</div>
            <div class="val val-green">₹${s.grossMargin.toFixed(2)} (${s.grossMarginPct.toFixed(1)}%)</div>
          </div>
        </div>

        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
          <strong>Portion Standard:</strong> ${s.portionSize}
        </div>

        <button class="special-expand-btn" onclick="toggleSpecialDetails('${s.id}')">
          <span id="btnText-${s.id}">🔍 View Full BOM Recipe & Prep Sequence</span>
          <span id="btnIcon-${s.id}">▼</span>
        </button>

        <div class="special-details-drawer" id="details-${s.id}">
          <h4 style="font-size: 13px; font-weight: 800; color: var(--charcoal); margin-bottom: 8px;">
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

          <h4 style="font-size: 13px; font-weight: 800; color: var(--red); margin-bottom: 6px;">
            🔥 Standardized Wok Prep Sequence
          </h4>
          <ol class="steps-ol" style="font-size: 12.5px; margin-bottom: 14px;">
            ${s.prepSequence.map(step => `<li>${step}</li>`).join('')}
          </ol>

          <div style="background: var(--gold-light); padding: 10px 12px; border-radius: 8px; border: 1px solid var(--gold-border); font-size: 12px; color: #7b5906;">
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
  if (btnText) btnText.textContent = isOpen ? '▲ Hide BOM Costing & Prep Details' : '🔍 View Full BOM Recipe & Prep Sequence';
  if (btnIcon) btnIcon.textContent = isOpen ? '▲' : '▼';
}

/* ==========================================================================
   RENDER 14 MOTHER SAUCES
   ========================================================================== */
function filterSauces(category) {
  document.querySelectorAll('#sauceCategoryFilters .sauce-chip').forEach(chip => chip.classList.remove('active'));
  event.target.classList.add('active');
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
          <div style="font-size: 13px; color: var(--text-muted);">${sauce.description}</div>
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
        <span style="font-size: 20px;">⚡</span>
        <div>
          <strong>60-Second Kitchen Emergency Substitute:</strong>
          <div>${sauce.emergencySub}</div>
        </div>
      </div>

      <div style="margin-top: 12px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-size: 11.5px; color: var(--text-muted); padding-top: 10px; border-top: 1px solid var(--border-light);">
        <span><strong>🧊 Storage & HACCP:</strong> ${sauce.shelfLife}</span>
        <span><strong>🔬 Quality KPI:</strong> ${sauce.qualityChecks}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER MISE EN PLACE ("MISA") MANUAL
   ========================================================================== */
function renderMisaModules() {
  const container = document.getElementById('misaContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.misa) return;

  const modules = window.INDUS_BIBLE.misa.modules;

  container.innerHTML = modules.map(mod => `
    <div class="misa-module-card">
      <div class="misa-mod-header">
        <div class="misa-mod-icon">${mod.icon}</div>
        <div class="misa-mod-title">
          <span class="badge-tag badge-gold" style="font-size: 10px; text-transform: uppercase;">${mod.badge}</span>
          <h3>${mod.title}</h3>
        </div>
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">${mod.description}</p>

      <div class="misa-sub-list">
        ${mod.standards ? mod.standards.map(st => `
          <div class="misa-sub-item">
            <h5>${st.cutName}</h5>
            <div style="font-size: 11.5px; color: var(--gold); font-weight: 700; margin-bottom: 4px;">Target: ${st.targetDishes}</div>
            <p><strong>Dimension & Spec:</strong> ${st.specs}</p>
            <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;"><em>Why it matters:</em> ${st.importance}</p>
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
            <ul style="padding-left: 18px; font-size: 12.5px; display: flex; flex-direction: column; gap: 6px;">
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
    countDisplay.textContent = `Showing ${filtered.length} of ${allRecipes.length} recipes`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-line);">
        <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
        <h3 style="color: var(--charcoal); font-size: 16px;">No recipes match your search filters</h3>
        <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">Try searching for "Fried Rice", "Manchurian", "Lollipop", "Hakka", or clear the filters.</p>
        <button class="cat-filter-btn" style="margin-top: 14px;" onclick="resetRecipeFilters()">Reset All Filters</button>
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
        
        <div class="dish-meta-pills">
          <span>⏱️ ${dish.prepTime}</span>
          <span>🔥 ${dish.cookTime}</span>
          <span style="color:var(--green); font-weight:700;">₹${dish.costing.rawCost.toFixed(0)} cost</span>
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
  document.getElementById('modalRecipeId').textContent = `#${recipe.id}`;

  document.getElementById('modalPlatingText').textContent = recipe.plating || 'Serve piping hot in Indus Wok branded presentation tableware with fresh garnish.';
  document.getElementById('modalChefTipText').textContent = recipe.chefTip || 'Maintain extreme wok heat for signature smokiness and preserve vegetable crispness.';

  // Render Misa List
  const misaList = document.getElementById('modalMisaList');
  misaList.innerHTML = recipe.misaRequired.map(m => `
    <span class="misa-tag">✓ ${m}</span>
  `).join('');

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
    if (factor === 1) portionLabel.textContent = '1 Single Order (Standard Portion)';
    else if (factor === 2) portionLabel.textContent = '2 Orders (Double Batch)';
    else if (factor === 5) portionLabel.textContent = '5 Orders (Rush Hour Line Batch)';
    else if (factor === 10) portionLabel.textContent = '10 Orders (Catering / Party Batch)';
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
        <strong style="color:var(--red); font-weight:800;">${scaledQty} <span style="font-size:10.5px; color:var(--text-muted); font-weight:normal;">(₹${scaledCost})</span></strong>
      </li>
    `;
  }).join('');
}

function closeRecipeModal() {
  document.getElementById('recipeModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
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

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('recipeModalOverlay');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') closeRecipeModal();
    if (e.key === 'ArrowLeft') navigateRecipe(-1);
    if (e.key === 'ArrowRight') navigateRecipe(1);
  }
});


function handleModalOutsideClick(e) {
  if (e.target.id === 'recipeModalOverlay') {
    closeRecipeModal();
  }
}

function printModalRecipe() {
  window.print();
}

/* ==========================================================================
   RENDER EMERGENCY MISSING MATRIX
   ========================================================================== */
function renderEmergencySubs() {
  const container = document.getElementById('emergencySubsContainer');
  if (!container || !window.INDUS_BIBLE || !window.INDUS_BIBLE.emergencySubs) return;

  const subs = window.INDUS_BIBLE.emergencySubs;

  container.innerHTML = subs.map(item => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-line); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
      <div style="font-size: 11px; font-weight: 800; color: var(--red); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">MISSING INGREDIENT:</div>
      <h4 style="font-size: 16px; font-weight: 800; color: var(--charcoal); margin-bottom: 10px;">${item.missing}</h4>
      <div style="background: var(--gold-light); padding: 12px; border-radius: 8px; border: 1px solid var(--gold-border); font-size: 13px; color: #7b5906; line-height: 1.5;">
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
  // Model base weights: Chicken dish base ~ ₹65, Rice ~ ₹40, Veg ~ ₹35
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
    recBox.innerHTML = `✅ <strong>Optimal Health:</strong> Your calculated food cost of <strong>${computedFcPct.toFixed(1)}%</strong> meets the target threshold (&le;${targetFc}%). Continue monitoring chicken portion weights on prep scales and preserve day-old rice yields.`;
  } else {
    recBox.innerHTML = `⚠️ <strong>Margin Warning:</strong> Food cost of <strong>${computedFcPct.toFixed(1)}%</strong> exceeds your target (${targetFc}%). Recommended Action: Adjust selling prices upward by ~₹15-20 or review supplier purchasing rates on boneless chicken and cooking oil.`;
  }
}
