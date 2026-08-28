/* ===========================================================================
   INDUS WOK RESTAURANT BIBLE & CULINARY OPS MANUAL - MASTER DATASET
   Includes:
   1. 14 Mother Sauces with Batching & Scratch Formulas
   2. 5 Mise en Place ("Misa") Operational Modules
   3. Detailed Master Cuts Guide with Technical Diagram SVGs
   4. 4 Indus Wok Special Flagship Dishes with In-Depth BOM Costing
   5. 283 Full Menu Dish Recipes with End-Result Images & Cooking Specs
   6. Emergency Substitutions Matrix
   =========================================================================== */

window.INDUS_BIBLE = {
  sauces: [
  {
    "id": "sauce-1",
    "name": "Indus Signature Red Schezwan Mother Paste",
    "category": "Fiery & Chili Bases",
    "yield": "2.5 Liters (Master Batch)",
    "prepTime": "20 mins",
    "cookTime": "45 mins",
    "shelfLife": "21 Days Chilled (2\u00b0C - 4\u00b0C) | 90 Days Frozen (-18\u00b0C)",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (High Fiery Umami)",
    "description": "The golden crown jewel of Indus Wok. A slow-cooked emulsion of whole Kashmiri & Guntur dried red chillies, crushed Sichuan peppercorns, star anise, minced mountain garlic, ginger, and Chinese celery simmered in pure oil until aromatic and glistening.",
    "ingredients": [
      {
        "item": "Kashmiri Dried Red Chillies (Stemless, deseeded 50% for vibrant red color)",
        "qty": "300g"
      },
      {
        "item": "Guntur / Byadgi Red Chillies (for deep heat and pungent aroma)",
        "qty": "150g"
      },
      {
        "item": "Refined Sunflower / Peanut Oil (High smoke point)",
        "qty": "800ml"
      },
      {
        "item": "Fresh Garlic (Finely minced brunoise)",
        "qty": "400g"
      },
      {
        "item": "Fresh Ginger (Finely minced brunoise)",
        "qty": "250g"
      },
      {
        "item": "Chinese Celery Stems (Micro-diced)",
        "qty": "100g"
      },
      {
        "item": "Star Anise Whole (Bruised)",
        "qty": "6 pcs"
      },
      {
        "item": "Sichuan / Timur Peppercorns (Dry roasted & coarse crushed)",
        "qty": "25g"
      },
      {
        "item": "Dark Soy Sauce (Superior dark)",
        "qty": "120ml"
      },
      {
        "item": "Light Soy Sauce",
        "qty": "80ml"
      },
      {
        "item": "White Rice Vinegar / Cane Vinegar",
        "qty": "150ml"
      },
      {
        "item": "Tomato Paste / Concentrated Concass\u00e9",
        "qty": "150g"
      },
      {
        "item": "Raw Cane Sugar / Brown Sugar",
        "qty": "60g"
      },
      {
        "item": "Cracked White Pepper Powder",
        "qty": "15g"
      },
      {
        "item": "Sea Salt / Rock Salt",
        "qty": "45g"
      },
      {
        "item": "Toasted Sesame Oil (Finish)",
        "qty": "50ml"
      }
    ],
    "method": [
      "CHILI PREP: Snip dried chillies into halves. Boil in 1.5L water for 12 minutes until plump and tender. Drain water completely (save 100ml soaking broth). Grind to a textured, semi-coarse red paste (do not puree into a smoothie; keep slight flecks).",
      "OIL INFUSION: In a heavy-bottomed master wok or stockpot, heat 800ml refined oil over medium-low flame (140\u00b0C). Add whole bruised star anise and crushed Sichuan peppercorns. Infuse for 3 minutes until fragrant, then remove star anise with a slotted spoon.",
      "AROMATIC SWEATING: Add minced garlic and ginger to the hot oil. Fry gently over medium heat for 8-10 minutes until aromatic and pale blonde. Add micro-diced celery and saut\u00e9 2 minutes.",
      "SLOW EMULSION: Carefully ladle in the ground chili paste (caution: oil will sizzle vigorously). Lower flame to gentle simmer. Cook continuously for 20-25 minutes, stirring every 2 minutes with wooden paddle to prevent scorching.",
      "SEASONING MASTER BLEND: When red oil separates and floats cleanly on top, add tomato paste, dark soy, light soy, vinegar, sugar, white pepper, and salt. Cook for another 8 minutes until the paste turns a deep ruby mahogany red.",
      "FINISH & COOL: Turn off heat. Stir in 50ml toasted sesame oil. Allow to cool completely to room temperature before transferring into food-grade airtight containers.",
      "STORAGE: Pour a thin 1cm protective barrier layer of chili oil on top before sealing. Label with Prep Date, Expiry Date, and Cook initials."
    ],
    "emergencySub": "If out of scratch Schezwan paste: Blend 200g commercial red chilli paste + 50g tomato paste + 20g garlic powder + 15ml dark soy + 15ml vinegar + 10g sugar + 30ml hot chili oil. Whisk over low heat for 3 minutes.",
    "qualityChecks": "Color: Deep crimson ruby red (not dull brown). Aroma: Sharp garlic, toasted peppercorn, zero burnt scent. Oil Separation: Clear glossy red oil layer on top."
  },
  {
    "id": "sauce-2",
    "name": "Indus Dark Soy Stir-Fry Seasoning Master (Indus Dark Base)",
    "category": "Master Seasoning Liquids",
    "yield": "3 Liters",
    "prepTime": "10 mins",
    "cookTime": "20 mins",
    "shelfLife": "30 Days Ambient in Squeeze Bottles | 60 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f (Savory Umami Caramel)",
    "description": "The secret backbone sauce used on the line for instant Hakka Noodles, Fried Rice, and wok-seared vegetables. Balances dark mushroom soy sweetness with salty light soy, caramelized aromatics, and rice wine essence.",
    "ingredients": [
      {
        "item": "Superior Dark Soy Sauce (Lee Kum Kee or equivalent)",
        "qty": "1000ml"
      },
      {
        "item": "Light / Premium Soy Sauce",
        "qty": "800ml"
      },
      {
        "item": "Vegetarian Mushroom Seasoning Sauce / Stir Fry Sauce",
        "qty": "400ml"
      },
      {
        "item": "Chinese Rice Wine Substitute (Apple juice + Rice vinegar 1:1)",
        "qty": "300ml"
      },
      {
        "item": "Brown Cane Sugar (Caramelized)",
        "qty": "200g"
      },
      {
        "item": "Whole Star Anise",
        "qty": "4 pcs"
      },
      {
        "item": "Cinnamon Stick (Crushed)",
        "qty": "1 stick (5g)"
      },
      {
        "item": "Cracked White Pepper",
        "qty": "20g"
      },
      {
        "item": "Clean Filtered Water",
        "qty": "400ml"
      }
    ],
    "method": [
      "In a dry saucepan, melt brown cane sugar over medium flame until it bubbles into a dark amber caramel (do not burn).",
      "Carefully deglaze with 400ml warm water (it will steam). Whisk until caramel dissolves completely.",
      "Pour in dark soy sauce, light soy sauce, mushroom sauce, and rice wine substitute.",
      "Drop in star anise and crushed cinnamon stick. Bring to a gentle rolling boil.",
      "Reduce flame to low and simmer for 15 minutes to marry all flavors and infuse the gentle spice warmth.",
      "Stir in cracked white pepper. Strain through fine mesh cone strainer.",
      "Cool completely and funnel into 1L kitchen squeeze bottles labeled 'INDUS DARK BASE'."
    ],
    "emergencySub": "Equal parts Dark Soy Sauce (2 tbsp) + Light Soy Sauce (2 tbsp) + 1 tsp brown sugar + 1/2 tsp white pepper + 1 tsp water.",
    "qualityChecks": "Brix/Sweetness: Balanced savory-sweet umami with velvety body. Viscosity: Coats the back of a spoon lightly without clumping."
  },
  {
    "id": "sauce-3",
    "name": "Indo-Chinese Manchurian Mother Sauce Base",
    "category": "Gravy & Simmer Bases",
    "yield": "4 Liters",
    "prepTime": "15 mins",
    "cookTime": "25 mins",
    "shelfLife": "7 Days Chilled (2\u00b0C - 4\u00b0C)",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Pungent Ginger-Garlic-Soy)",
    "description": "The essential concentrated reduction base for all Veg & Chicken Manchurian Dry, Semi-gravy, and Rice with Gravy dishes. Pungent with crushed mountain ginger, garlic, and fresh green chillies.",
    "ingredients": [
      {
        "item": "Refined Sunflower Oil",
        "qty": "300ml"
      },
      {
        "item": "Garlic Brunoise (Fine minced)",
        "qty": "350g"
      },
      {
        "item": "Fresh Ginger Brunoise (Fine minced)",
        "qty": "300g"
      },
      {
        "item": "Fresh Indian Green Chillies (Finely chopped)",
        "qty": "150g"
      },
      {
        "item": "Chinese Celery Stems (Fine mince)",
        "qty": "100g"
      },
      {
        "item": "Spring Onion Whites (Chopped)",
        "qty": "150g"
      },
      {
        "item": "Dark Soy Sauce",
        "qty": "350ml"
      },
      {
        "item": "Green Chilli Sauce",
        "qty": "200ml"
      },
      {
        "item": "Tomato Ketchup / Puree",
        "qty": "150ml"
      },
      {
        "item": "White Vinegar",
        "qty": "120ml"
      },
      {
        "item": "Concentrated Vegetable / Chicken Broth Stock",
        "qty": "2500ml"
      },
      {
        "item": "Cracked White Pepper & Black Pepper",
        "qty": "25g"
      },
      {
        "item": "Rock Salt",
        "qty": "30g"
      },
      {
        "item": "Pure Toasted Sesame Oil",
        "qty": "40ml"
      }
    ],
    "method": [
      "Heat oil in large wok over medium flame. Add garlic, ginger, green chillies, and celery.",
      "Saut\u00e9 for 6-8 minutes until golden aromatic (do not brown heavily; keep fresh ginger pungency).",
      "Add spring onion whites and saut\u00e9 for 1 minute.",
      "Pour in dark soy sauce, green chilli sauce, tomato ketchup, and vinegar. Stir vigorously for 2 minutes to cook out raw acidity.",
      "Add 2.5L concentrated seasoned broth. Bring to a rapid rolling boil for 10 minutes.",
      "Season with salt, cracked peppers, and stir in sesame oil.",
      "Cool down in ice-water bath before refrigeration. On the line during service, ladle required quantity into wok and thicken with cornstarch slurry."
    ],
    "emergencySub": "Saut\u00e9 1 tbsp minced garlic + 1 tbsp minced ginger + 1 chopped green chili in 1 tbsp oil for 30s. Add 1 tbsp dark soy, 1 tsp green chili sauce, 1 tsp vinegar, 1/2 tsp sugar, 1 cup water, pinch of salt & white pepper.",
    "qualityChecks": "Color: Dark glossy chocolate brown. Balance: Sharp ginger-garlic kick upfront, savory soy backbone, clean tangy finish."
  },
  {
    "id": "sauce-4",
    "name": "Indus Supreme Hot Garlic Master Glaze",
    "category": "Fiery & Chili Bases",
    "yield": "2.5 Liters",
    "prepTime": "15 mins",
    "cookTime": "30 mins",
    "shelfLife": "14 Days Chilled (2\u00b0C - 4\u00b0C)",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Fiery Tangy Garlic)",
    "description": "Intense garlic-forward sauce with fermented red chili paste, tomato concass\u00e9, and a bright vinegar snap. Powers Hot Garlic Wings, Hot Garlic Starters, and Rice with Gravy.",
    "ingredients": [
      {
        "item": "Refined Oil",
        "qty": "400ml"
      },
      {
        "item": "Garlic (Crushed & Minced 50/50 mix)",
        "qty": "500g"
      },
      {
        "item": "Red Chili Paste (Kashmiri chili puree)",
        "qty": "400g"
      },
      {
        "item": "Tomato Paste / Puree",
        "qty": "300g"
      },
      {
        "item": "Dark Soy Sauce",
        "qty": "100ml"
      },
      {
        "item": "White Rice Vinegar",
        "qty": "180ml"
      },
      {
        "item": "Sugar",
        "qty": "70g"
      },
      {
        "item": "Cracked White Pepper",
        "qty": "15g"
      },
      {
        "item": "Vegetable Stock",
        "qty": "1000ml"
      },
      {
        "item": "Salt",
        "qty": "35g"
      }
    ],
    "method": [
      "Heat oil in wok over medium heat. Add the 500g garlic mince and fry gently until pale golden and sweet.",
      "Add red chili paste and tomato paste. Saut\u00e9 over low flame for 12 minutes until oil separates.",
      "Pour in vegetable stock, dark soy sauce, vinegar, and sugar. Bring to a simmer.",
      "Season with salt and white pepper. Simmer for 10 minutes until thick and glossy.",
      "Cool, bottle, and chill."
    ],
    "emergencySub": "Mix 2 tbsp Red Chili Paste + 1.5 tbsp Garlic Paste + 1 tbsp Tomato Ketchup + 1 tsp Soy + 1 tsp Vinegar + 1/2 tsp Sugar + 3 tbsp Water.",
    "qualityChecks": "Glossy bright scarlet sheen, explosive fresh garlic aroma, sharp tangy heat."
  },
  {
    "id": "sauce-5",
    "name": "Burnt Garlic & Scallion Oil Infusion",
    "category": "Aromatic Finishing Oils",
    "yield": "1.5 Liters",
    "prepTime": "10 mins",
    "cookTime": "25 mins",
    "shelfLife": "30 Days Ambient (Cool Dry Place)",
    "spiceLevel": "Non-Spicy (Smoky Nutty Toasted)",
    "description": "The golden secret behind Indus Wok's famous Burnt Garlic Fried Rice and Burnt Chilli Garlic Noodles. Triple-filtered golden garlic crunch chips and toasted aromatic garlic oil.",
    "ingredients": [
      {
        "item": "Fresh Garlic (Finely minced to exact 1.5mm uniform cubes)",
        "qty": "600g"
      },
      {
        "item": "Refined Sunflower / Canola Oil",
        "qty": "1200ml"
      },
      {
        "item": "Spring Onion Whites (Bruised)",
        "qty": "100g"
      },
      {
        "item": "Pure Toasted Sesame Oil",
        "qty": "100ml"
      },
      {
        "item": "Fine Sea Salt",
        "qty": "10g"
      }
    ],
    "method": [
      "CRITICAL HEAT CONTROL: In a clean cold master wok, combine 1200ml refined oil and 600g minced garlic. DO NOT add garlic to hot oil (it will burn the outside while raw inside).",
      "Turn heat to medium-low. As oil begins to bubble gently, stir continuously with a wire whisk to keep garlic particles moving.",
      "Cook for 18-20 minutes. Garlic will turn from white -> pale yellow -> light straw -> golden blonde.",
      "WATCH CLOSELY AT 160\u00b0C: The moment garlic turns light golden blonde, immediately pour oil through a fine stainless steel mesh strainer into a stainless steel bowl.",
      "The residual heat will continue to brown the garlic on the strainer to perfect crunchy deep amber gold.",
      "Spread the crispy burnt garlic chips on paper towels, sprinkle 10g fine salt, and store in airtight bin.",
      "Whisk 100ml toasted sesame oil into the filtered warm garlic oil. Bottle as 'BURNT GARLIC INFUSION OIL'."
    ],
    "emergencySub": "Fry 3 tbsp minced garlic in 4 tbsp oil in small pan over low heat for 4 minutes until golden. Use immediately.",
    "qualityChecks": "Chips must be crisp, crunchy, amber-gold (never black/bitter). Oil must be crystal clear with deep nutty toasted garlic fragrance."
  },
  {
    "id": "sauce-6",
    "name": "Indus Kung Pao Master Glaze",
    "category": "Pan-Asian Sweet-Savory Bases",
    "yield": "2 Liters",
    "prepTime": "15 mins",
    "cookTime": "20 mins",
    "shelfLife": "14 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Sweet, Tangy, Peppercorn Heat)",
    "description": "Rich Sichuan glaze with roasted peanuts, whole dried chillies, Chinkiang black vinegar profile, and dark soy.",
    "ingredients": [
      {
        "item": "Dark Soy Sauce",
        "qty": "300ml"
      },
      {
        "item": "Light Soy Sauce",
        "qty": "250ml"
      },
      {
        "item": "Black Vinegar / Balsamic + Rice Vinegar Blend",
        "qty": "200ml"
      },
      {
        "item": "Brown Sugar",
        "qty": "180g"
      },
      {
        "item": "Red Chili Paste",
        "qty": "150g"
      },
      {
        "item": "Smooth Roasted Peanut Butter / Peanut Paste",
        "qty": "100g"
      },
      {
        "item": "Sichuan Peppercorn Powder",
        "qty": "20g"
      },
      {
        "item": "Ginger & Garlic Juice",
        "qty": "100ml"
      },
      {
        "item": "Water / Stock",
        "qty": "800ml"
      }
    ],
    "method": [
      "Whisk dark soy, light soy, black vinegar, brown sugar, chili paste, and peanut paste in a bowl until dissolved.",
      "Simmer mixture in a saucepan over medium heat for 12 minutes.",
      "Add Sichuan peppercorn powder and ginger-garlic juice. Whisk until silky and uniform.",
      "Bottle and label."
    ],
    "emergencySub": "2 tbsp soy sauce + 1 tbsp vinegar + 1 tbsp chili sauce + 1 tsp peanut butter + 1 tbsp brown sugar + 2 tbsp water.",
    "qualityChecks": "Rich gloss, subtle nutty richness from peanuts, mouth-numbing tingling finish from Sichuan pepper."
  },
  {
    "id": "sauce-7",
    "name": "Artisanal Black Bean & Garlic Sauce",
    "category": "Fermented Umami Bases",
    "yield": "1.5 Liters",
    "prepTime": "15 mins",
    "cookTime": "20 mins",
    "shelfLife": "21 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f (Deep Salty Fermented Umami)",
    "description": "Traditional Cantonese fermented black soybean paste pounded with fresh ginger, garlic, and Shaoxing reduction. Used for Black Pepper and Black Bean wok dishes.",
    "ingredients": [
      {
        "item": "Fermented Salted Black Soybeans (Douchi - rinsed lightly)",
        "qty": "350g"
      },
      {
        "item": "Refined Oil",
        "qty": "250ml"
      },
      {
        "item": "Garlic (Coarse minced)",
        "qty": "250g"
      },
      {
        "item": "Ginger (Fine minced)",
        "qty": "150g"
      },
      {
        "item": "Dark Soy Sauce",
        "qty": "150ml"
      },
      {
        "item": "Shaoxing Wine Substitute",
        "qty": "100ml"
      },
      {
        "item": "Sugar",
        "qty": "50g"
      },
      {
        "item": "Cracked Coarse Black Pepper",
        "qty": "30g"
      },
      {
        "item": "Broth",
        "qty": "400ml"
      }
    ],
    "method": [
      "Rinse fermented black beans in cold water for 10 seconds to remove excess brine. Coarsely mash 70% with mortar and pestle (leave 30% whole).",
      "Heat oil in wok, fry garlic and ginger for 3 minutes until aromatic.",
      "Add mashed black beans and saut\u00e9 over low heat for 8 minutes until fragrance deepens.",
      "Add dark soy, wine substitute, sugar, coarse black pepper, and broth. Simmer for 8 minutes into a rich thick paste.",
      "Cool and store in glass jars."
    ],
    "emergencySub": "1.5 tbsp dark soy + 1 tbsp miso paste + 1 tbsp minced garlic + 1 tsp coarse black pepper + 1 tsp sugar.",
    "qualityChecks": "Glossy black-brown paste with whole bean textures, deep savory umami aroma."
  },
  {
    "id": "sauce-8",
    "name": "Sweet & Sour Master Glaze",
    "category": "Pan-Asian Sweet-Savory Bases",
    "yield": "3 Liters",
    "prepTime": "10 mins",
    "cookTime": "15 mins",
    "shelfLife": "30 Days Chilled",
    "spiceLevel": "Non-Spicy (Vibrant Fruity Sweet-Sour)",
    "description": "Bright Cantonese sweet & sour base made with pineapple reduction, tomato concass\u00e9, and apple cider vinegar.",
    "ingredients": [
      {
        "item": "100% Pure Pineapple Juice",
        "qty": "1000ml"
      },
      {
        "item": "Tomato Paste / Ketchup",
        "qty": "600g"
      },
      {
        "item": "Rice Vinegar / Apple Cider Vinegar",
        "qty": "400ml"
      },
      {
        "item": "Cane Sugar",
        "qty": "350g"
      },
      {
        "item": "Plum Sauce / Apricot Jam",
        "qty": "150g"
      },
      {
        "item": "Salt",
        "qty": "20g"
      },
      {
        "item": "Cornstarch (diluted in 100ml water)",
        "qty": "40g"
      }
    ],
    "method": [
      "Combine pineapple juice, tomato paste, vinegar, sugar, plum sauce, and salt in a stainless steel stockpot.",
      "Bring to a boil, stirring until sugar is completely dissolved.",
      "Reduce heat to low and simmer for 10 minutes.",
      "Slowly whisk in cornstarch slurry and simmer for 2 minutes until brilliant ruby gloss and thick glaze consistency.",
      "Cool and store in labeled dispenser jugs."
    ],
    "emergencySub": "4 tbsp tomato ketchup + 2 tbsp vinegar + 2 tbsp sugar + 2 tbsp water + 1/2 tsp cornstarch.",
    "qualityChecks": "Radiant translucent red gloss, crisp fruity tang balanced against smooth sweetness."
  },
  {
    "id": "sauce-9",
    "name": "Japanese Teriyaki & Yakitori Glaze",
    "category": "Japanese & Glazes",
    "yield": "2 Liters",
    "prepTime": "10 mins",
    "cookTime": "25 mins",
    "shelfLife": "30 Days Chilled",
    "spiceLevel": "Non-Spicy (Sweet Savory Mirin Soy)",
    "description": "Authentic Japanese reduction glaze used for Chicken Teriyaki, Teriyaki Sushi, and Teriyaki starters.",
    "ingredients": [
      {
        "item": "Japanese Kikkoman / Premium Light Soy Sauce",
        "qty": "700ml"
      },
      {
        "item": "Dark Soy Sauce",
        "qty": "200ml"
      },
      {
        "item": "Mirin (Sweet Rice Wine) / White Grape Juice + Rice Vinegar",
        "qty": "500ml"
      },
      {
        "item": "Brown Sugar / Jaggery syrup",
        "qty": "300g"
      },
      {
        "item": "Fresh Ginger (Crushed slices)",
        "qty": "80g"
      },
      {
        "item": "Fresh Garlic (Crushed cloves)",
        "qty": "60g"
      },
      {
        "item": "Cornstarch",
        "qty": "30g (in 60ml water)"
      }
    ],
    "method": [
      "Combine soy sauces, mirin substitute, brown sugar, ginger slices, and crushed garlic in a saucepan.",
      "Bring to a boil, then reduce flame to low and simmer for 18 minutes to reduce by 25%.",
      "Strain out ginger and garlic solids.",
      "Return liquid to low flame, whisk in starch slurry, and simmer 2 minutes until velvety lacquer coating.",
      "Bottle in squeeze dispensers."
    ],
    "emergencySub": "3 tbsp soy sauce + 2 tbsp brown sugar + 1 tbsp vinegar + 1/2 tsp grated ginger + 1 tsp cornstarch.",
    "qualityChecks": "Deep mirror-like brown gloss, clings perfectly to proteins without dripping off."
  },
  {
    "id": "sauce-10",
    "name": "Korean Gochujang Spicy Glaze",
    "category": "Pan-Asian Sweet-Savory Bases",
    "yield": "2 Liters",
    "prepTime": "10 mins",
    "cookTime": "15 mins",
    "shelfLife": "21 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Sweet Smokey Fermented Heat)",
    "description": "Powers Korean Fried Rice, Korean Noodles, and Spicy Korean Ramen bowls with authentic Seoul street flavor.",
    "ingredients": [
      {
        "item": "Korean Gochujang Red Pepper Paste",
        "qty": "500g"
      },
      {
        "item": "Gochugaru (Korean coarse chili flakes)",
        "qty": "100g"
      },
      {
        "item": "Soy Sauce",
        "qty": "250ml"
      },
      {
        "item": "Honey / Corn Syrup",
        "qty": "200g"
      },
      {
        "item": "Brown Sugar",
        "qty": "100g"
      },
      {
        "item": "Minced Garlic",
        "qty": "150g"
      },
      {
        "item": "Grated Ginger",
        "qty": "50g"
      },
      {
        "item": "Toasted Sesame Oil",
        "qty": "80ml"
      },
      {
        "item": "Water",
        "qty": "600ml"
      }
    ],
    "method": [
      "In a saucepan, combine water, soy sauce, honey, brown sugar, minced garlic, and ginger.",
      "Whisk in Gochujang paste and Gochugaru flakes until smooth.",
      "Simmer over medium-low heat for 12 minutes until slightly reduced and syrupy.",
      "Whisk in toasted sesame oil, cool and bottle."
    ],
    "emergencySub": "3 tbsp red chili paste + 1 tbsp miso paste + 1.5 tbsp honey + 1 tbsp soy sauce + 1 tsp garlic powder + 1 tsp sesame oil.",
    "qualityChecks": "Velvety crimson glaze, deep fermented umami with lingering sweet warmth."
  },
  {
    "id": "sauce-11",
    "name": "Classic Indo-Chinese Green Chilli Sauce",
    "category": "Fiery & Chili Bases",
    "yield": "2 Liters",
    "prepTime": "10 mins",
    "cookTime": "15 mins",
    "shelfLife": "30 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Sharp Pungent Green Heat)",
    "description": "Fresh vibrant green chili sauce base for Green Chilli Fried Rice, Green Chilli Noodles, and table condiments.",
    "ingredients": [
      {
        "item": "Fresh Indian Dark Green Chillies (Stems removed)",
        "qty": "800g"
      },
      {
        "item": "Fresh Garlic Cloves",
        "qty": "200g"
      },
      {
        "item": "Fresh Ginger",
        "qty": "100g"
      },
      {
        "item": "White Cane Vinegar",
        "qty": "500ml"
      },
      {
        "item": "Clean Water",
        "qty": "300ml"
      },
      {
        "item": "Rock Salt",
        "qty": "40g"
      },
      {
        "item": "Sugar",
        "qty": "30g"
      }
    ],
    "method": [
      "Roughly chop green chillies, garlic, and ginger.",
      "Boil in water and vinegar for 8 minutes until softened.",
      "Transfer to high-speed blender with salt and sugar. Blend until silky smooth emerald green.",
      "Simmer pureed sauce in clean wok for 5 minutes. Cool and bottle in airtight containers."
    ],
    "emergencySub": "Blend 100g fresh green chillies + 4 garlic cloves + 50ml vinegar + 1/2 tsp salt in a blender for 60 seconds.",
    "qualityChecks": "Bright olive-emerald green color, electric sharp chili pungency."
  },
  {
    "id": "sauce-12",
    "name": "Thai Curry Paste & Broth Master Base",
    "category": "Pan-Asian Sweet-Savory Bases",
    "yield": "2 Liters",
    "prepTime": "20 mins",
    "cookTime": "25 mins",
    "shelfLife": "14 Days Chilled | 60 Days Frozen",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Citrus Lemongrass & Coconut Infusion)",
    "description": "Aromatic Southeast Asian paste for Thai Soups, Thai Noodles, and Thai Curry Ramen bowls.",
    "ingredients": [
      {
        "item": "Fresh Lemongrass Stalks (White inner part sliced)",
        "qty": "200g"
      },
      {
        "item": "Fresh Galangal / Young Ginger",
        "qty": "120g"
      },
      {
        "item": "Kaffir Lime Leaves / Fresh Lime Zest",
        "qty": "30g"
      },
      {
        "item": "Fresh Coriander Roots & Stems",
        "qty": "100g"
      },
      {
        "item": "Bird's Eye Chillies (Red/Green)",
        "qty": "150g"
      },
      {
        "item": "Shallots / Red Onion",
        "qty": "200g"
      },
      {
        "item": "Garlic Cloves",
        "qty": "150g"
      },
      {
        "item": "Toasted Coriander & Cumin Powder",
        "qty": "25g"
      },
      {
        "item": "Coconut Oil",
        "qty": "100ml"
      },
      {
        "item": "Concentrated Coconut Cream",
        "qty": "400ml"
      }
    ],
    "method": [
      "Pound or blend lemongrass, galangal, lime leaves, coriander roots, chillies, shallots, and garlic into a fine aromatic paste.",
      "Heat coconut oil in wok, fry paste for 10 minutes until oil glitters on the sides.",
      "Stir in toasted spices and coconut cream. Simmer for 10 minutes.",
      "Portion into 250g containers and freeze or refrigerate."
    ],
    "emergencySub": "1 tbsp minced ginger + 1 tbsp lime juice + 1 tsp lemon zest + 1 chopped green chili + 3 tbsp coconut milk + 1/2 tsp cumin.",
    "qualityChecks": "Heady citrus-lemongrass fragrance with rich velvety coconut body."
  },
  {
    "id": "sauce-13",
    "name": "Artisanal Momo Jhol Broth & Schezwan Momo Chutney",
    "category": "Momo Dips & Broths",
    "yield": "2 Liters",
    "prepTime": "15 mins",
    "cookTime": "20 mins",
    "shelfLife": "7 Days Chilled",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Nutty Sesame Timur Tang)",
    "description": "Traditional Himalayan spiced sesame-tomato dipping broth served piping hot with Jhol Momos and steamed momos.",
    "ingredients": [
      {
        "item": "Ripe Red Tomatoes (Roasted over flame & peeled)",
        "qty": "800g"
      },
      {
        "item": "White Sesame Seeds (Dry roasted to golden brown)",
        "qty": "200g"
      },
      {
        "item": "Roasted Peanuts (Skinless)",
        "qty": "100g"
      },
      {
        "item": "Fresh Garlic Cloves",
        "qty": "80g"
      },
      {
        "item": "Fresh Green Chillies & Dried Red Chillies",
        "qty": "60g"
      },
      {
        "item": "Timur / Sichuan Peppercorn (Ground)",
        "qty": "15g"
      },
      {
        "item": "Fresh Coriander",
        "qty": "50g"
      },
      {
        "item": "Mustard Oil / Refined Oil",
        "qty": "60ml"
      },
      {
        "item": "Lemon Juice",
        "qty": "50ml"
      },
      {
        "item": "Chicken / Veg Broth",
        "qty": "800ml"
      },
      {
        "item": "Salt",
        "qty": "25g"
      }
    ],
    "method": [
      "Dry roast white sesame seeds and peanuts until golden and aromatic.",
      "In a blender, combine roasted tomatoes, roasted sesame, peanuts, garlic, chillies, timur pepper, coriander, and lemon juice. Blend into a smooth rich puree.",
      "Heat mustard oil in pot until smoking, let cool slightly, then temper the puree into the pot.",
      "Pour in 800ml hot broth. Simmer for 10 minutes into a silky, fragrant soup-broth.",
      "Serve warm poured over steamed momos."
    ],
    "emergencySub": "Blend 2 roasted tomatoes + 2 tbsp tahini/sesame paste + 2 garlic cloves + 1 red chili + 1/2 cup warm chicken broth + squeeze of lemon.",
    "qualityChecks": "Creamy golden-orange hue, nutty sesame mouthfeel with citrus timur tingling finish."
  },
  {
    "id": "sauce-14",
    "name": "Crispy Chilli Garlic Crunch Oil (Kitchen Batch)",
    "category": "Aromatic Finishing Oils",
    "yield": "1.5 Liters",
    "prepTime": "15 mins",
    "cookTime": "20 mins",
    "shelfLife": "45 Days Ambient",
    "spiceLevel": "\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f\ud83c\udf36\ufe0f (Crispy Textured Crunchy Umami)",
    "description": "Ultra-crunchy condiment made with fried shallots, crisp garlic flakes, crushed roasted peanuts, and chili flakes steeped in star anise & cinnamon oil.",
    "ingredients": [
      {
        "item": "Crispy Fried Garlic Flakes",
        "qty": "200g"
      },
      {
        "item": "Crispy Fried Red Shallots / Onions",
        "qty": "200g"
      },
      {
        "item": "Coarse Red Chili Flakes (Sichuan/Kashmiri mix)",
        "qty": "150g"
      },
      {
        "item": "Crushed Roasted Peanuts",
        "qty": "100g"
      },
      {
        "item": "Toasted White Sesame Seeds",
        "qty": "50g"
      },
      {
        "item": "Star Anise & Cinnamon Infused Hot Oil (175\u00b0C)",
        "qty": "800ml"
      },
      {
        "item": "Mushroom Seasoning Powder",
        "qty": "20g"
      },
      {
        "item": "Sugar & Salt",
        "qty": "25g"
      }
    ],
    "method": [
      "In a large heatproof stainless steel bowl, place chili flakes, sesame seeds, mushroom powder, salt, and sugar.",
      "Heat 800ml oil with star anise and cinnamon stick to 175\u00b0C.",
      "Carefully pour hot oil over the chili flake mixture (it will sizzle and turn fragrant).",
      "Allow oil to cool down to 50\u00b0C, then fold in crispy garlic flakes, fried shallots, and crushed peanuts (adding them when oil is cool preserves maximum crunch).",
      "Store in sealed glass jars."
    ],
    "emergencySub": "Mix 3 tbsp chili flakes + 2 tbsp fried onion + 2 tbsp fried garlic + 1/2 cup warm oil + pinch of salt & sugar.",
    "qualityChecks": "Insane audible crunch with every spoonful, ruby-red oil with deep roasted nuttiness."
  }
],
  misa: {
  "modules": [
    {
      "id": "misa-1",
      "title": "Vegetable Cutting Standards & Precision Matrix",
      "badge": "Cutting SOP",
      "icon": "\ud83d\udcd0",
      "description": "Standardized knife cuts ensure uniform cooking in 400\u00b0C wok, identical texture in every bite, and zero customer complaints.",
      "standards": [
        {
          "cutName": "Diamond Cut (Lozenge / Rhombus - 2.5cm)",
          "targetDishes": "Chilli Chicken, Paneer Chilli, Manchurian Dry, Dragon Chicken, Kung Pao",
          "specs": "Cut capsicum and onions into precise 2.5cm x 2.5cm angular diamond lozenges. Never square dice.",
          "importance": "Catches wok heat quickly while staying crunchy and holding thick sauce glaze."
        },
        {
          "cutName": "Fine Julienne (Matchstick - 1.5mm x 50mm)",
          "targetDishes": "Veg & Chicken Hakka Noodles, Hong Kong Noodles, Spring Rolls",
          "specs": "Cabbage, carrots, and bell peppers sliced into paper-thin 1.5mm ribbons matching noodle thickness.",
          "importance": "Allows vegetables to weave seamlessly with noodle strands so every forkful has equal crunch."
        },
        {
          "cutName": "Brunoise / Micro-Mince (2mm x 2mm cubes)",
          "targetDishes": "Fried Rice varieties, Manchow & Hot-Sour Soups, Gravy Bases",
          "specs": "Carrot, French beans, ginger, garlic, and celery minced into tiny uniform 2mm beads.",
          "importance": "Ensures aromatics dissolve their flavor into the oil without leaving large raw chunks in rice."
        },
        {
          "cutName": "Batons & Diagonal Slices (1cm x 4cm)",
          "targetDishes": "Pot Rice, Claypot, Baby Corn & Broccoli Sizzlers",
          "specs": "Baby corn cut on sharp 45\u00b0 bias; mushrooms quartered; broccoli broken into bite-sized 3cm florets.",
          "importance": "Blanched for 45 seconds in boiling salted water before wok sear to preserve vibrant color."
        },
        {
          "cutName": "Spring Onion Separation (Whites vs. Greens)",
          "targetDishes": "All Wok Dishes across the entire Indus Wok menu",
          "specs": "WHITE BULBS: Micro-chopped and added in wok stage 1 for saut\u00e9ed sweetness. GREENS: Sliced fine and folded in the final 5 seconds off-heat for fresh color and crisp aroma.",
          "importance": "Spring onion greens turn limp, brown, and grassy if cooked over high flame."
        }
      ]
    },
    {
      "id": "misa-2",
      "title": "Protein Velveting & Pre-Treatment Protocols",
      "badge": "Protein SOP",
      "icon": "\ud83c\udf57",
      "description": "The golden technique of professional Asian kitchens: locking moisture into chicken, paneer, and seafood so proteins remain velvety, tender, and juicy even after intense wok tossing.",
      "protocols": [
        {
          "protein": "Chicken Velveting (The Secret to Indus Wok Tender Chicken)",
          "rawPrep": "Slice boneless chicken breast or thigh into uniform 3mm strips or 2cm cubes across the grain.",
          "marinade": "For 1 kg Chicken: 1 Egg White (or 30ml ice water for eggless) + 25g Cornstarch + 15ml Light Soy + 5ml Shaoxing substitute + 5g White Pepper + 3g Salt + 15ml Refined Oil.",
          "method": "Massage marinade into chicken by hand for 3 minutes until all liquid is absorbed and chicken is glossy. Rest chilled for 30 minutes.",
          "oilPass": "WATER BATH / LOW OIL PASS: Heat oil to 140\u00b0C (medium low). Drop marinated chicken and stir with wire spider for 30-40 seconds until white on outside and 75% cooked inside. Drain immediately. When flashed in high-flame wok later, the chicken will be melt-in-the-mouth juicy."
        },
        {
          "protein": "Paneer Crisping & Moisture Lock",
          "rawPrep": "Cut fresh malai paneer into 2.5cm cubes.",
          "marinade": "Soak in warm 3% salted water for 10 minutes to soften. Pat completely dry with kitchen towels.",
          "method": "Dust lightly with a 50/50 mix of cornstarch and refined flour seasoned with white pepper.",
          "oilPass": "Flash fry in 180\u00b0C hot oil for 60 seconds until crust is golden-crisp while the interior stays creamy soft."
        },
        {
          "protein": "Egg Ribbon Scramble Prep",
          "rawPrep": "Whisk 10 whole eggs with 10ml light soy, 2g white pepper, and 10ml water.",
          "method": "In a screaming hot oiled wok, pour egg and swirl for 15 seconds into thin golden scrambled curds. Remove immediately before tossing with rice/noodles."
        },
        {
          "protein": "Tiger Prawns De-Veining & Crisp Alkaline Wash",
          "rawPrep": "Peel and devein prawns. Toss with 1 tsp baking soda and ice water for 10 minutes.",
          "method": "Rinse thoroughly under running cold water and dry. The alkaline wash gives prawns the famous restaurant 'snappy crunch' texture."
        }
      ]
    },
    {
      "id": "misa-3",
      "title": "Carbohydrate Mastery (Noodles & Day-Old Rice)",
      "badge": "Carb SOP",
      "icon": "\ud83c\udf5a",
      "description": "Carbohydrates form 60%+ of sales. Flawless texture is non-negotiable.",
      "protocols": [
        {
          "carb": "Hakka & Wheat Noodles (80% Al Dente Standard)",
          "boilRatio": "5 Liters of rapidly boiling water + 30g salt per 1 kg raw noodles.",
          "boilTime": "Drop noodles into rolling boil. Cook for exactly 3.5 to 4 minutes until center has a tiny white pin-dot (80% cooked).",
          "shockCool": "Drain instantly and plunge into ICE COLD WATER bath to halt cooking and remove surface starch.",
          "oilToss": "Drain thoroughly on perforated sheet racks. Drizzle 30ml refined oil and toss by hand to coat every strand. Store in flat perforated crates."
        },
        {
          "carb": "Fried Rice Master Protocol (Overnight Dehydration)",
          "riceType": "Aged Long-Grain Sona Masoori or Jasmine Rice (minimum 1 year aged).",
          "steamRatio": "1 kg Rice to 1.15 Liters Water (slightly drier than home rice to prevent mushiness in wok).",
          "coolDown": "Spread freshly steamed rice on stainless steel sheet pans under high-speed cooling fan for 20 minutes.",
          "refrigeration": "Transfer to walk-in chiller (2\u00b0C - 4\u00b0C) uncovered for 8-12 hours. The cold air evaporates surface moisture and retrogrades the starch.",
          "preWok": "Gently rub chilled rice clumps between palms before tossing into screaming hot wok. Every single grain will separate and toast individually."
        }
      ]
    },
    {
      "id": "misa-4",
      "title": "Wok Station Ergonomics, Seasoning & Wok Hei Control",
      "badge": "Station SOP",
      "icon": "\ud83d\udd25",
      "description": "Speed on the line wins dinner rushes. The wok station must be arranged so the chef never takes a single step away during a 2-minute cooking ticket.",
      "guidelines": [
        {
          "title": "9-Cup Speed Rack Layout (Clockwise from Wok Ring)",
          "detail": "1: Oil Ladle Pan | 2: Minced Garlic | 3: Minced Ginger | 4: Schezwan Paste | 5: Chopped Green Chillies | 6: Spring Onion Whites | 7: Indus Dark Base Squeeze Bottle | 8: Concentrated Broth Ladle | 9: Cornstarch Slurry Pot."
        },
        {
          "title": "Wok Seasoning & Daily Carbon Steel Burn-Off",
          "detail": "Every morning: Heat carbon steel wok over jet flame until glowing blue (burns off residue). Swirl 50ml oil to coat inner walls, smoke until black, discard oil, and wipe with dry cotton towel. Creates natural non-stick Teflon-grade patina."
        },
        {
          "title": "Mastering Wok Hei (350\u00b0C - 450\u00b0C)",
          "detail": "Wok Hei (Breath of the Wok) happens when microscopic oil droplets vaporize in extreme radiant heat and pass through high-tossed rice/noodles. Keep burner at full blast, toss food 10cm into the flame zone for 60 seconds."
        },
        {
          "title": "Veg vs. Non-Veg Cross-Contamination Barrier",
          "detail": "Dedicated Green Wok Ladle & Green Cutting Board for Veg dishes. Red Ladle & Red Board for Non-Veg. Dedicated Veg fryers. Always hot-water wash wok between different orders."
        }
      ]
    },
    {
      "id": "misa-5",
      "title": "Kitchen HACCP, Storage Temperatures & Shift Handover",
      "badge": "Food Safety",
      "icon": "\ud83d\udee1\ufe0f",
      "description": "Strict compliance guidelines for food safety, FIFO labeling, and daily stock buffer management.",
      "checklist": [
        "Walk-in Chiller Temperature Log: Must maintain +2\u00b0C to +4\u00b0C (Checked at 11 AM and 6 PM).",
        "Deep Freezer Temperature Log: Must maintain -18\u00b0C or below.",
        "FIFO (First In First Out): All prepped sauces, velveted chicken, and blanched noodles must have date stickers.",
        "Morning Buffer Targets: 10kg boiled noodles, 15kg chilled steamed rice, 6kg velveted chicken, 3kg diced paneer, 2L Schezwan, 2L Dark Base.",
        "End of Night Clean Down: Woks scrubbed with bamboo brush (no soap), burner jets cleaned with brass wire, prep surfaces sanitized with food-grade quat spray."
      ]
    }
  ]
},
  cuts: [
  {
    "id": "cut-julienne",
    "name": "Fine Julienne Cut (Matchstick / Allumette)",
    "hindiName": "\u0932\u092e\u094d\u092c\u093e \u092c\u093e\u0930\u0940\u0915 \u0915\u0924\u0930\u0928 (Matchstick)",
    "targetDishes": "Veg & Chicken Hakka Noodles, Hong Kong Noodles, Spring Rolls, Noodle Soups",
    "dimension": "1.5 mm \u00d7 1.5 mm \u00d7 50 mm (2 inches long)",
    "knifeAngle": "90\u00b0 Parallel to Cutting Board",
    "targetVeg": "Carrots, Cabbage, Green Capsicum, Red Bell Pepper",
    "whatIsIt": "A classic precision knife cut where vegetables are sliced into uniform, matchstick-thin strips (1.5mm thick by 50mm long). In Asian wok cookery, Julienne is the most critical cut for all noodle dishes.",
    "whyUsed": "Matches the exact thickness and flexibility of Hakka noodle strands. When tossed in a 400\u00b0C wok, julienned vegetables weave seamlessly into the noodles so the customer gets crunchy vegetables and noodles in every single forkful, rather than having vegetables sink to the bottom of the bowl.",
    "steps": [
      "1. SQUARING (Top & Tail): Cut off root ends and slice vegetable into 5cm (2-inch) cylindrical segments.",
      "2. PLANKS (Sheets): Slice thin, uniform 1.5mm flat planks down the length of the cylinder.",
      "3. STACKING: Stack 3 to 4 planks flat on top of each other.",
      "4. MATCHSTICK SLICE: Using a sharp chef knife or Chinese cleaver with a smooth rocking motion, cut down into 1.5mm matchsticks."
    ],
    "commonMistakes": "Cutting too thick (>3mm): Thick sticks take longer to cook than noodles, resulting in raw hard carrots. Cutting too short (<3cm): Short shreds get lost in the noodles and turn into mush.",
    "svgDiagram": "<svg viewBox=\"0 0 320 160\" class=\"cut-diagram-svg\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"160\" fill=\"#1b1e28\" rx=\"10\"/><rect x=\"25\" y=\"35\" width=\"80\" height=\"90\" fill=\"#d96b14\" opacity=\"0.3\" rx=\"4\" stroke=\"#d96b14\" stroke-width=\"2\"/><text x=\"65\" y=\"25\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1.5mm Plank</text><line x1=\"25\" y1=\"55\" x2=\"105\" y2=\"55\" stroke=\"#fff\" stroke-dasharray=\"3,3\" opacity=\"0.6\"/><line x1=\"25\" y1=\"75\" x2=\"105\" y2=\"75\" stroke=\"#fff\" stroke-dasharray=\"3,3\" opacity=\"0.6\"/><line x1=\"25\" y1=\"95\" x2=\"105\" y2=\"95\" stroke=\"#fff\" stroke-dasharray=\"3,3\" opacity=\"0.6\"/><path d=\"M 120 80 L 145 80\" stroke=\"#c79a3a\" stroke-width=\"3\"/><g transform=\"translate(160, 30)\"><rect x=\"0\" y=\"10\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><rect x=\"0\" y=\"25\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><rect x=\"0\" y=\"40\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><rect x=\"0\" y=\"55\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><rect x=\"0\" y=\"70\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><rect x=\"0\" y=\"85\" width=\"120\" height=\"5\" fill=\"#d96b14\" rx=\"1\"/><line x1=\"0\" y1=\"105\" x2=\"120\" y2=\"105\" stroke=\"#c79a3a\" stroke-width=\"1.5\"/><text x=\"60\" y=\"120\" fill=\"#c79a3a\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">50 mm (2 inches)</text><text x=\"125\" y=\"50\" fill=\"#22c55e\" font-size=\"10\" font-weight=\"800\">1.5mm</text></g></svg>"
  },
  {
    "id": "cut-diamond",
    "name": "Diamond Cut (Lozenge / Rhombus / Pai Cut)",
    "hindiName": "\u0921\u093e\u092f\u092e\u0902\u0921 / \u0915\u093e\u091c\u0942 \u0915\u0924\u0932\u0940 \u0915\u091f (Diamond Lozenge)",
    "targetDishes": "Chilli Chicken, Paneer Chilli, Manchurian Dry, Dragon Chicken, Kung Pao, Schezwan Dry",
    "dimension": "25 mm \u00d7 25 mm Rhombus (45\u00b0 angle angles)",
    "knifeAngle": "45\u00b0 Diagonal Bias Angle",
    "targetVeg": "Green Bell Peppers, Red & Yellow Capsicum, Onions (Petals separated)",
    "whatIsIt": "A geometric cut where bell peppers and onion petals are sliced at intersecting 45-degree angles to produce angular diamond-shaped lozenges (rhombuses).",
    "whyUsed": "Crucial for Indo-Chinese starters! The angular corners cook rapidly while the thick center stays snappy and crunchy. The broad flat surface acts as a paddle that clings to thick Schezwan, Chilli, and Manchurian glaze reductions.",
    "steps": [
      "1. DESEEDING: Cut capsicum into 4 flat rectangular cheeks; discard inner white ribs and seeds.",
      "2. DIAGONAL STRIPS: Hold knife at a 45\u00b0 angle and slice capsicum cheek into 2.5cm parallel strips.",
      "3. CROSS-CUT AT 45\u00b0: Turn cutting angle 45\u00b0 in opposite direction and slice across at 2.5cm intervals to yield perfect diamond rhombuses.",
      "4. ONION PETALS: Cut peeled onion into quarters, then pop out individual petal layers to match capsicum diamonds."
    ],
    "commonMistakes": "Square Dicing (90\u00b0 cuts): Square cuts cook unevenly and look like home curry instead of restaurant starters. Mismatched onion/capsicum sizes: Capsicum cooks slower than onion if not cut to the exact same dimension.",
    "svgDiagram": "<svg viewBox=\"0 0 320 160\" class=\"cut-diagram-svg\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"160\" fill=\"#1b1e28\" rx=\"10\"/><path d=\"M 30 110 L 60 40 L 90 40 L 60 110 Z\" fill=\"#168a47\" opacity=\"0.4\" stroke=\"#168a47\" stroke-width=\"2\"/><text x=\"60\" y=\"25\" fill=\"#e2e8f0\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">45\u00b0 Bias Strip</text><path d=\"M 115 80 L 140 80\" stroke=\"#c79a3a\" stroke-width=\"3\"/><g transform=\"translate(160, 25)\"><polygon points=\"30,10 65,10 45,55 10,55\" fill=\"#168a47\" stroke=\"#22c55e\" stroke-width=\"2\"/><polygon points=\"75,10 110,10 90,55 55,55\" fill=\"#168a47\" stroke=\"#22c55e\" stroke-width=\"2\"/><polygon points=\"45,65 80,65 60,110 25,110\" fill=\"#168a47\" stroke=\"#22c55e\" stroke-width=\"2\"/><polygon points=\"90,65 125,65 105,110 70,110\" fill=\"#168a47\" stroke=\"#22c55e\" stroke-width=\"2\"/><text x=\"70\" y=\"125\" fill=\"#c79a3a\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">2.5 cm \u00d7 2.5 cm (45\u00b0 Rhombus)</text></g></svg>"
  },
  {
    "id": "cut-brunoise",
    "name": "Brunoise Cut (Micro-Dice / Fine Mince)",
    "hindiName": "\u092c\u093e\u0930\u0940\u0915 \u0926\u093e\u0928\u093e \u0915\u091f (2mm Micro-Dice)",
    "targetDishes": "Veg & Chicken Fried Rice, Manchow Soup, Hot & Sour Soup, Manchurian Gravy Base",
    "dimension": "2.0 mm \u00d7 2.0 mm \u00d7 2.0 mm Tiny Uniform Cubes",
    "knifeAngle": "90\u00b0 Strict Perpendicular",
    "targetVeg": "Carrots, French Beans, Celery, Ginger Brunoise, Mountain Garlic, Fresh Red/Green Chillies",
    "whatIsIt": "The smallest standardized cube cut in culinary arts, made by first cutting fine julienne and then dicing crosswise into 2mm miniature cubic beads.",
    "whyUsed": "Essential for Fried Rice and Soups! Brunoise vegetables cook in hot wok oil in 10 to 15 seconds. They distribute evenly across hundreds of rice grains, infusing garlic-ginger aroma without overpowering individual bites.",
    "steps": [
      "1. FINE JULIENNE: Cut vegetable into micro-thin 2mm matchsticks.",
      "2. BUNDLING: Gather matchsticks tightly together in a neat bundle under the guiding hand claw.",
      "3. CROSSWISE DICE: Slice across the matchsticks at 2mm intervals with smooth, rhythmic knife strokes."
    ],
    "commonMistakes": "Using food processor/blender: Mashing vegetables in a blender releases cell water, making fried rice soggy. Brunoise MUST be knife-cut dry.",
    "svgDiagram": "<svg viewBox=\"0 0 320 160\" class=\"cut-diagram-svg\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"160\" fill=\"#1b1e28\" rx=\"10\"/><g transform=\"translate(25, 40)\"><rect x=\"0\" y=\"0\" width=\"70\" height=\"4\" fill=\"#d96b14\"/><rect x=\"0\" y=\"8\" width=\"70\" height=\"4\" fill=\"#d96b14\"/><rect x=\"0\" y=\"16\" width=\"70\" height=\"4\" fill=\"#d96b14\"/><rect x=\"0\" y=\"24\" width=\"70\" height=\"4\" fill=\"#d96b14\"/><line x1=\"20\" y1=\"-10\" x2=\"20\" y2=\"40\" stroke=\"#fff\" stroke-dasharray=\"2,2\"/><line x1=\"35\" y1=\"-10\" x2=\"35\" y2=\"40\" stroke=\"#fff\" stroke-dasharray=\"2,2\"/><line x1=\"50\" y1=\"-10\" x2=\"50\" y2=\"40\" stroke=\"#fff\" stroke-dasharray=\"2,2\"/><text x=\"35\" y=\"60\" fill=\"#e2e8f0\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">Cross-cut 2mm</text></g><path d=\"M 120 75 L 145 75\" stroke=\"#c79a3a\" stroke-width=\"3\"/><g transform=\"translate(165, 30)\"><rect x=\"0\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"18\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"36\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"54\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"72\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"90\" y=\"0\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"0\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"18\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"36\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"54\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"72\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"90\" y=\"18\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"0\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"18\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"36\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"54\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"72\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><rect x=\"90\" y=\"36\" width=\"10\" height=\"10\" fill=\"#d96b14\" rx=\"1\" stroke=\"#f97316\" stroke-width=\"1\"/><text x=\"50\" y=\"70\" fill=\"#c79a3a\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">2mm \u00d7 2mm Micro-Cubes</text></g></svg>"
  },
  {
    "id": "cut-baton",
    "name": "Batonnet & Bias Cut (Diagonal Slices / Batons)",
    "hindiName": "\u0924\u093f\u0930\u091b\u093e \u091f\u0941\u0915\u0921\u093c\u093e \u0915\u091f (45\u00b0 Bias Batons)",
    "targetDishes": "Pot Rice with Gravy, Claypot Rice, Sizzlers, Stir-Fry Exotic Veg, Dragon Chicken Batons",
    "dimension": "10 mm \u00d7 10 mm \u00d7 40 mm (or 45\u00b0 Oval Slices)",
    "knifeAngle": "45\u00b0 Sharp Diagonal Bias",
    "targetVeg": "Baby Corn, Button Mushrooms (quartered), Broccoli Florets, Chicken Batons, Zucchini",
    "whatIsIt": "Cutting vegetables and proteins into chunky 1cm thick by 4cm long batons or slicing cylindrical vegetables (like baby corn) at a steep 45-degree angle.",
    "whyUsed": "Showcases premium exotic vegetables in Claypot and Pot Rice dishes. The large surface area retains intense crunch and absorbs rich hot garlic or black bean broth.",
    "steps": [
      "1. BABY CORN BIAS: Slice diagonally at 45\u00b0 into 4cm elongated oval pieces.",
      "2. MUSHROOMS: Cut button mushrooms into clean vertical quarters through stem.",
      "3. BROCCOLI: Trim florets to uniform 3cm heads with 1cm stem attached.",
      "4. BLANCHING: Parboil in boiling salted water for 45 seconds, then shock in ice water."
    ],
    "commonMistakes": "Over-blanching: Boiling longer than 60 seconds turns broccoli yellow and soft. Raw addition: Adding raw broccoli directly into the wok without blanching leaves the core hard and uncooked.",
    "svgDiagram": "<svg viewBox=\"0 0 320 160\" class=\"cut-diagram-svg\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"160\" fill=\"#1b1e28\" rx=\"10\"/><g transform=\"translate(25, 45)\"><rect x=\"0\" y=\"10\" width=\"80\" height=\"25\" fill=\"#facc15\" rx=\"4\" opacity=\"0.4\" stroke=\"#facc15\" stroke-width=\"2\"/><line x1=\"20\" y1=\"0\" x2=\"40\" y2=\"45\" stroke=\"#fff\" stroke-dasharray=\"3,3\"/><line x1=\"50\" y1=\"0\" x2=\"70\" y2=\"45\" stroke=\"#fff\" stroke-dasharray=\"3,3\"/><text x=\"40\" y=\"60\" fill=\"#e2e8f0\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">45\u00b0 Bias Angle</text></g><path d=\"M 125 70 L 150 70\" stroke=\"#c79a3a\" stroke-width=\"3\"/><g transform=\"translate(165, 30)\"><ellipse cx=\"40\" cy=\"25\" rx=\"30\" ry=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\" transform=\"rotate(-25 40 25)\"/><ellipse cx=\"90\" cy=\"55\" rx=\"30\" ry=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\" transform=\"rotate(-25 90 55)\"/><text x=\"65\" y=\"95\" fill=\"#c79a3a\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">1cm \u00d7 4cm Elongated Oval</text></g></svg>"
  },
  {
    "id": "cut-scallion",
    "name": "Spring Onion Separation (Whites vs. Greens Protocol)",
    "hindiName": "\u0939\u0930\u093e \u092a\u094d\u092f\u093e\u091c \u0926\u094b-\u092d\u093e\u0917 \u0915\u091f (Whites vs Greens)",
    "targetDishes": "Universal Rule across ALL 283 Indus Wok Recipes",
    "dimension": "White Bulbs: 2mm Brunoise | Green Tops: 1mm Fine Rings & 5cm Ice Curls",
    "knifeAngle": "Strict Separation into Two Prep Bowls",
    "targetVeg": "Fresh Spring Onions / Scallions",
    "whatIsIt": "A fundamental Asian culinary rule: Separating the white pungent bulb from the delicate green hollow leaves and treating them as two completely distinct ingredients.",
    "whyUsed": "White bulbs contain allium sulfur sugars that caramelize into sweet, savory depth when saut\u00e9ed in hot oil (Stage 1). Green leaves are heat-sensitive and turn limp, brown, and bitter if cooked over high flame; they must ONLY be folded in the final 5 seconds off-flame for vibrant color and fresh aroma.",
    "steps": [
      "1. TRIM & WASH: Wash thoroughly to remove soil trapped inside tubes. Slice off root ends.",
      "2. BISECTION: Cut the stalk exactly at the boundary where white turns to pale green.",
      "3. WHITE PREP: Finely mince white bulbs (2mm). Place in Prep Bowl 1 (for Wok Saut\u00e9).",
      "4. GREEN PREP: Slice green tops into paper-thin 1mm circular rings (or 5cm fine shreds plunged in ice water for curled garnishes). Place in Prep Bowl 2 (for Plating/Garnish)."
    ],
    "commonMistakes": "Mixing whites and greens in one bowl: Cooking green tops in oil browns them and ruins the dish aesthetics. Adding greens too early: Kills the fresh crunch.",
    "svgDiagram": "<svg viewBox=\"0 0 320 160\" class=\"cut-diagram-svg\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"160\" fill=\"#1b1e28\" rx=\"10\"/><g transform=\"translate(30, 25)\"><rect x=\"0\" y=\"20\" width=\"70\" height=\"18\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"2\" rx=\"4\"/><rect x=\"70\" y=\"16\" width=\"160\" height=\"26\" fill=\"#168a47\" stroke=\"#22c55e\" stroke-width=\"2\" rx=\"4\"/><line x1=\"70\" y1=\"0\" x2=\"70\" y2=\"60\" stroke=\"#ef4444\" stroke-dasharray=\"4,4\" stroke-width=\"2\"/><text x=\"35\" y=\"60\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">WHITE BULB</text><text x=\"150\" y=\"60\" fill=\"#22c55e\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">GREEN TOPS</text></g><g transform=\"translate(30, 95)\"><rect x=\"0\" y=\"0\" width=\"115\" height=\"42\" fill=\"#242836\" rx=\"6\" stroke=\"#ef4444\" stroke-width=\"1.5\"/><text x=\"57\" y=\"18\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">STAGE 1: HOT WOK</text><text x=\"57\" y=\"32\" fill=\"#cbd5e1\" font-size=\"9.5\" text-anchor=\"middle\">Saut\u00e9 with ginger/garlic</text></g><g transform=\"translate(170, 95)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"42\" fill=\"#242836\" rx=\"6\" stroke=\"#22c55e\" stroke-width=\"1.5\"/><text x=\"60\" y=\"18\" fill=\"#22c55e\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">FINAL: 5-SEC FOLD</text><text x=\"60\" y=\"32\" fill=\"#cbd5e1\" font-size=\"9.5\" text-anchor=\"middle\">Fresh garnish & color</text></g></svg>"
  }
],
  specials: [
  {
    "id": "special-starter",
    "category": "STARTER",
    "dishName": "Indus Dragon Chicken (Special Fire-Cracker Glaze)",
    "menuPrice": 349,
    "portionSize": "280g Finished Dish (8 tender chicken batons)",
    "foodCost": 84.5,
    "foodCostPct": 24.21,
    "grossMargin": 264.5,
    "grossMarginPct": 75.79,
    "image": "images/indus_dragon_chicken.jpg",
    "flavorProfile": "Crispy velveted chicken batons tossed in wok-charred whole red chillies, roasted whole cashews, burnt garlic, honey-chilli glaze, and dark soy umami.",
    "whySpecial": "High-margin crowd favorite with explosive visual presentation, roasted nut crunch, and signature fire-cracker glaze.",
    "bom": [
      {
        "ingredient": "Boneless Chicken Breast (Cut into 1x5cm batons)",
        "qty": "180g",
        "unitRate": "\u20b9240 / kg",
        "cost": 43.2
      },
      {
        "ingredient": "Velveting Batter (Egg white + cornstarch + seasoning)",
        "qty": "30g",
        "unitRate": "\u20b9150 / kg",
        "cost": 4.5
      },
      {
        "ingredient": "Indus Dragon Chili Sauce Blend (Red chili + honey + soy)",
        "qty": "50ml",
        "unitRate": "\u20b9256 / L",
        "cost": 12.8
      },
      {
        "ingredient": "Whole Roasted Cashews (Golden toasted)",
        "qty": "20g",
        "unitRate": "\u20b9700 / kg",
        "cost": 14.0
      },
      {
        "ingredient": "Whole Dried Red Chillies & Aromatics (Garlic, Ginger)",
        "qty": "25g",
        "unitRate": "\u20b9160 / kg",
        "cost": 4.0
      },
      {
        "ingredient": "Refined Frying & Wok Cooking Oil (Absorption)",
        "qty": "30ml",
        "unitRate": "\u20b9150 / L",
        "cost": 4.5
      },
      {
        "ingredient": "Garnish (Spring onion greens, white sesame, lemon)",
        "qty": "10g",
        "unitRate": "\u20b9150 / kg",
        "cost": 1.5
      }
    ],
    "prepSequence": [
      "1. Velvet chicken batons in egg white and cornstarch marinade; flash fry at 180\u00b0C for 2.5 minutes until crisp. Drain.",
      "2. In hot wok, heat 15ml oil. Flash-toast whole dried red chillies and roasted cashews for 10 seconds until fragrant.",
      "3. Add minced garlic and ginger; saut\u00e9 15 seconds.",
      "4. Add Indus Dragon Chili Sauce blend and splash of broth. Simmer for 15 seconds to create a bubbling sticky glaze.",
      "5. Drop hot crispy chicken batons into glaze. Toss rapidly over high flame for 20 seconds to coat evenly without losing crispness.",
      "6. Finish with spring onion greens and toasted sesame seeds. Plate on heated slate."
    ]
  },
  {
    "id": "special-rice",
    "category": "RICE",
    "dishName": "Indus Signature Burnt Chilli Garlic Chicken Fried Rice",
    "menuPrice": 280,
    "portionSize": "420g Full Box / Bowl",
    "foodCost": 61.2,
    "foodCostPct": 21.86,
    "grossMargin": 218.8,
    "grossMarginPct": 78.14,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "flavorProfile": "Dehydrated overnight steamed rice grains flash-tossed with 3-stage infused burnt garlic (crispy chips, soft saut\u00e9ed, and cold-pressed garlic oil), bird's eye chillies, velveted chicken, and scallion whites.",
    "whySpecial": "Unbeatable wok hei smokiness with triple garlic texture. Indus Wok's #1 most re-ordered rice dish across delivery and dine-in.",
    "bom": [
      {
        "ingredient": "Aged Long-Grain Steamed Rice (Chilled day-old)",
        "qty": "220g (cooked)",
        "unitRate": "\u20b950 / kg cooked",
        "cost": 11.0
      },
      {
        "ingredient": "Velveted Boneless Chicken Breast Dices",
        "qty": "90g",
        "unitRate": "\u20b9240 / kg",
        "cost": 21.6
      },
      {
        "ingredient": "Fresh Garlic (Minced saut\u00e9 + Crispy burnt chips)",
        "qty": "35g",
        "unitRate": "\u20b9200 / kg",
        "cost": 7.0
      },
      {
        "ingredient": "Farm Fresh Egg (1 pc scrambled ribbon)",
        "qty": "1 pc",
        "unitRate": "\u20b96 / pc",
        "cost": 6.0
      },
      {
        "ingredient": "Refined Sunflower Oil + Infused Garlic Oil",
        "qty": "35ml",
        "unitRate": "\u20b9150 / L",
        "cost": 5.25
      },
      {
        "ingredient": "Spring Onions (Whites & Greens)",
        "qty": "25g",
        "unitRate": "\u20b9140 / kg",
        "cost": 3.5
      },
      {
        "ingredient": "Seasoning Blend (Dark soy, white pepper, aroma broth)",
        "qty": "10g",
        "unitRate": "\u20b9450 / kg",
        "cost": 4.5
      },
      {
        "ingredient": "Fresh Green Bird's Eye Chillies",
        "qty": "10g",
        "unitRate": "\u20b9150 / kg",
        "cost": 1.5
      },
      {
        "ingredient": "Accompaniment (Indus Schezwan dip cup 30g)",
        "qty": "1 cup",
        "unitRate": "\u20b90.85 / cup",
        "cost": 0.85
      }
    ],
    "prepSequence": [
      "1. Heat wok until blue smoke appears. Swirl 20ml garlic infusion oil.",
      "2. Add egg and velveted chicken; scramble for 20 seconds.",
      "3. Add minced garlic, green chillies, and spring onion whites; saut\u00e9 15 seconds.",
      "4. Drop 220g cold day-old rice into the wok. Break any clumps with wok ladle.",
      "5. Drizzle dark soy seasoning blend around the inner wok rim to caramelize.",
      "6. Toss continuously over 400\u00b0C extreme flame for 90 seconds so every grain dances and absorbs Wok Hei.",
      "7. Fold in spring onion greens. Dish out and crown with golden crispy burnt garlic chips."
    ]
  },
  {
    "id": "special-noodles",
    "category": "NOODLES",
    "dishName": "Indus Hong-Kong Street Style Hakka Noodles (Chicken & Egg)",
    "menuPrice": 260,
    "portionSize": "400g Full Box / Plate",
    "foodCost": 54.8,
    "foodCostPct": 21.08,
    "grossMargin": 205.2,
    "grossMarginPct": 78.92,
    "image": "images/indus_hongkong_noodles.jpg",
    "flavorProfile": "Springy wheat noodles seared over roaring flame with dark mushroom soy glaze, julienned tri-color bell peppers, shredded cabbage, carrots, egg ribbons, velvet chicken, and toasted sesame oil.",
    "whySpecial": "Quintessential Pan-Asian street flavor with incredible noodle springiness and 78.9% gross profit margin.",
    "bom": [
      {
        "ingredient": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "200g (cooked)",
        "unitRate": "\u20b960 / kg cooked",
        "cost": 12.0
      },
      {
        "ingredient": "Velveted Chicken Breast Strips",
        "qty": "80g",
        "unitRate": "\u20b9240 / kg",
        "cost": 19.2
      },
      {
        "ingredient": "Farm Fresh Egg (1 pc scrambled)",
        "qty": "1 pc",
        "unitRate": "\u20b96 / pc",
        "cost": 6.0
      },
      {
        "ingredient": "Julienned Fresh Veggies (Cabbage, carrot, bell peppers)",
        "qty": "80g",
        "unitRate": "\u20b985 / kg",
        "cost": 6.8
      },
      {
        "ingredient": "Indus Hong Kong Master Seasoning Sauce (Mushroom soy blend)",
        "qty": "20ml",
        "unitRate": "\u20b9210 / L",
        "cost": 4.2
      },
      {
        "ingredient": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "25ml",
        "unitRate": "\u20b9176 / L",
        "cost": 4.4
      },
      {
        "ingredient": "Spring Onions & Ginger-Garlic Juliennes",
        "qty": "15g",
        "unitRate": "\u20b9146 / kg",
        "cost": 2.2
      }
    ],
    "prepSequence": [
      "1. Season wok with high flame. Swirl 20ml oil.",
      "2. Crack egg and add chicken strips; flash sear 25 seconds.",
      "3. Add ginger slivers, garlic, and julienned vegetables; stir fry 30 seconds (keep veggies crunchy).",
      "4. Add chilled boiled noodles. Toss with chopsticks / wok motion to separate strands.",
      "5. Drizzle Hong Kong seasoning sauce along the wok edge. Toss on high heat for 60 seconds.",
      "6. Finish with pure toasted sesame oil and spring onion greens. Twirl onto platter."
    ]
  },
  {
    "id": "special-gravy",
    "category": "RICE WITH GRAVY",
    "dishName": "Indus Royal Claypot / Pot Rice with Supreme Hot Garlic Gravy",
    "menuPrice": 430,
    "portionSize": "650g Two-Tier Feast (300g Garlic Rice + 350g Supreme Gravy)",
    "foodCost": 102.4,
    "foodCostPct": 23.81,
    "grossMargin": 327.6,
    "grossMarginPct": 76.19,
    "image": "images/indus_pot_rice_gravy.jpg",
    "flavorProfile": "Two-tier master meal: fragrant wok-toasted garlic rice base layered with a rich, silky, sizzling dark hot-garlic gravy loaded with velvet chicken, button mushrooms, baby corn, broccoli florets, bell peppers, and scallions.",
    "whySpecial": "High-ticket flagship item with unbeatable perceived value, generous exotic vegetables, and exceptional \u20b9327.60 gross profit contribution per order.",
    "bom": [
      {
        "ingredient": "Steamed Garlic Fried Rice Base",
        "qty": "300g (cooked)",
        "unitRate": "\u20b950 / kg cooked",
        "cost": 15.0
      },
      {
        "ingredient": "Velveted Boneless Chicken Breast Strips",
        "qty": "120g",
        "unitRate": "\u20b9240 / kg",
        "cost": 28.8
      },
      {
        "ingredient": "Exotic & Fresh Vegetables (Broccoli, Mushroom, Baby corn, Bell peppers)",
        "qty": "100g",
        "unitRate": "\u20b9245 / kg",
        "cost": 24.5
      },
      {
        "ingredient": "Indus Hot Garlic Mother Sauce + Rich Broth",
        "qty": "250ml",
        "unitRate": "\u20b958.40 / L",
        "cost": 14.6
      },
      {
        "ingredient": "Cornstarch Liaison & Seasoning",
        "qty": "20g",
        "unitRate": "\u20b9175 / kg",
        "cost": 3.5
      },
      {
        "ingredient": "Garlic, Ginger & Bird's Eye Chilli Brunoise",
        "qty": "25g",
        "unitRate": "\u20b9168 / kg",
        "cost": 4.2
      },
      {
        "ingredient": "Pure Sesame Oil + Cooking Oil",
        "qty": "30ml",
        "unitRate": "\u20b9226 / L",
        "cost": 6.8
      },
      {
        "ingredient": "Spring Onion Greens & Fresh Garnish",
        "qty": "15g",
        "unitRate": "\u20b9166 / kg",
        "cost": 2.5
      },
      {
        "ingredient": "Heavy-Duty 2-Compartment Container (Delivery Packaging)",
        "qty": "1 set",
        "unitRate": "\u20b92.50 / set",
        "cost": 2.5
      }
    ],
    "prepSequence": [
      "1. TIER 1 (Rice Base): Flash fry 300g chilled rice with garlic and light soy in high flame wok for 90 seconds. Place in claypot or serving bowl.",
      "2. TIER 2 (Gravy): Heat 15ml oil in wok. Saut\u00e9 minced garlic, ginger, and green chillies for 15 seconds.",
      "3. Add chicken strips and blanched exotic veggies (broccoli, baby corn, mushrooms, bell peppers). Stir fry 45 seconds.",
      "4. Pour in 250ml Indus Hot Garlic sauce and concentrated broth. Bring to a rolling boil.",
      "5. Slowly stream in cornstarch slurry while whisking until a luxurious glossy glaze coats the spoon.",
      "6. Swirl in sesame oil and scallions.",
      "7. Pour sizzling hot gravy over the bed of garlic rice. Garnish with fresh scallion curls and toasted sesame."
    ]
  }
],
  recipes: [
  {
    "id": "mmszgir1xxdhp",
    "name": "Veg Clear Soup",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 120,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 21.6,
      "sellingPrice": 120,
      "foodCostPct": 18.0,
      "grossMargin": 98.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xv4zn",
    "name": "Chicken Clear Soup",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 160,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 36.8,
      "sellingPrice": 160,
      "foodCostPct": 23.0,
      "grossMargin": 123.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xiixg",
    "name": "Veg Garlic Soup",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 110,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 19.8,
      "sellingPrice": 110,
      "foodCostPct": 18.0,
      "grossMargin": 90.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xav9s",
    "name": "Chicken Garlic Soup",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 150,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 34.5,
      "sellingPrice": 150,
      "foodCostPct": 23.0,
      "grossMargin": 115.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xdw3j",
    "name": "Veg Hot & Sour",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 130,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 23.4,
      "sellingPrice": 130,
      "foodCostPct": 18.0,
      "grossMargin": 106.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xfows",
    "name": "Chicken Hot & Sour",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 150,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 34.5,
      "sellingPrice": 150,
      "foodCostPct": 23.0,
      "grossMargin": 115.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xfn3l",
    "name": "Veg Lemon Coriander",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 130,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 23.4,
      "sellingPrice": 130,
      "foodCostPct": 18.0,
      "grossMargin": 106.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xl53r",
    "name": "Chicken Lemon Coriander",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 160,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 36.8,
      "sellingPrice": 160,
      "foodCostPct": 23.0,
      "grossMargin": 123.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xp6ao",
    "name": "Veg Lung Fung",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 140,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 25.2,
      "sellingPrice": 140,
      "foodCostPct": 18.0,
      "grossMargin": 114.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xfnmw",
    "name": "Chicken Lung Fung",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 180,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 41.4,
      "sellingPrice": 180,
      "foodCostPct": 23.0,
      "grossMargin": 138.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xbybu",
    "name": "Veg Manchow",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 120,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 21.6,
      "sellingPrice": 120,
      "foodCostPct": 18.0,
      "grossMargin": 98.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xk00s",
    "name": "Chicken Manchow",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 150,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 34.5,
      "sellingPrice": 150,
      "foodCostPct": 23.0,
      "grossMargin": 115.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xjzoa",
    "name": "Veg Mushroom Soup",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 140,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Button Mushrooms (Quartered 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 25.2,
      "sellingPrice": 140,
      "foodCostPct": 18.0,
      "grossMargin": 114.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xx2av",
    "name": "Chicken Mushroom Soup",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 170,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 39.1,
      "sellingPrice": 170,
      "foodCostPct": 23.0,
      "grossMargin": 130.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1x2sqf",
    "name": "Veg Sweet Corn",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 130,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 23.4,
      "sellingPrice": 130,
      "foodCostPct": 18.0,
      "grossMargin": 106.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xb39c",
    "name": "Chicken Sweet Corn",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 170,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 39.1,
      "sellingPrice": 170,
      "foodCostPct": 23.0,
      "grossMargin": 130.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1xsnkj",
    "name": "Veg Thai Soup",
    "cat": "Soups",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 150,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 27.0,
      "sellingPrice": 150,
      "foodCostPct": 18.0,
      "grossMargin": 123.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1xozz9",
    "name": "Chicken Thai Soup",
    "cat": "Soups",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 210,
    "halfPrice": 0,
    "image": "images/indus_manchow_soup.jpg",
    "prepTime": "4 mins",
    "cookTime": "3 mins",
    "wokHeat": "Medium-High Simmer",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "50g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Cabbage, Carrot, French Beans, Celery",
        "qty": "40g",
        "cost": 4.0
      },
      {
        "item": "Minced Garlic & Ginger Brunoise",
        "qty": "15g",
        "cost": 2.5
      },
      {
        "item": "Indus Seasoned Vegetable / Chicken Broth",
        "qty": "350ml",
        "cost": 8.0
      },
      {
        "item": "Dark Soy, Vinegar, Chili Paste, White Pepper",
        "qty": "20ml",
        "cost": 4.0
      },
      {
        "item": "Cornstarch Liaison (1 tbsp starch + water)",
        "qty": "20ml",
        "cost": 2.0
      },
      {
        "item": "Crispy Fried Noodles Topping",
        "qty": "25g",
        "cost": 3.0
      }
    ],
    "misaRequired": [
      "Simmer mother broth stock daily (Chicken bones/carcass + aromatics OR Veg trimmings + celery + star anise)",
      "Brunoise soup vegetables into microscopic 1.5mm uniform bits",
      "Deep fry noodles in advance and store in airtight bins for Manchow crisp topping"
    ],
    "steps": [
      "Heat a clean wok over medium-high flame. Add 10ml oil, ginger-garlic mince, and celery. Saut\u00e9 for 20 seconds.",
      "Add finely minced vegetables and protein. Saut\u00e9 30 seconds.",
      "Pour in 350ml seasoned mother broth. Bring to a rolling boil.",
      "Add dark soy, vinegar, white pepper, and salt. Adjust seasoning to achieve the signature Indus hot-sour-umami profile.",
      "Stir the cornstarch slurry and slowly pour into the simmering soup while whisking with ladle.",
      "Simmer for 45 seconds until clear, silky, and velvety.",
      "Ladle into soup bowl, top with fresh coriander."
    ],
    "plating": "Serve in deep porcelain bowl accompanied by a side cup of golden crispy fried noodles.",
    "chefTip": "Always add vinegar at the very end of boiling; boiling vinegar for too long makes the soup taste bitter and dulls the aroma.",
    "costing": {
      "rawCost": 48.3,
      "sellingPrice": 210,
      "foodCostPct": 23.0,
      "grossMargin": 161.7,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1x3d05",
    "name": "Chicken Seekh Kebab",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 80.5,
      "sellingPrice": 350,
      "foodCostPct": 23.0,
      "grossMargin": 269.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yi7c8",
    "name": "Chicken Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ykcdr",
    "name": "Chicken Pahadi Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 87.4,
      "sellingPrice": 380,
      "foodCostPct": 23.0,
      "grossMargin": 292.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yvv6m",
    "name": "Chicken Rojali Kebab",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 103.5,
      "sellingPrice": 450,
      "foodCostPct": 23.0,
      "grossMargin": 346.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yxvur",
    "name": "Chicken Tandoori Full",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 550,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 126.5,
      "sellingPrice": 550,
      "foodCostPct": 23.0,
      "grossMargin": 423.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y5kku",
    "name": "Chicken Lasoni Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 87.4,
      "sellingPrice": 380,
      "foodCostPct": 23.0,
      "grossMargin": 292.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y4kvu",
    "name": "Chicken Angara Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 420,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 96.6,
      "sellingPrice": 420,
      "foodCostPct": 23.0,
      "grossMargin": 323.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yo7jq",
    "name": "Chicken Jamuni Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 87.4,
      "sellingPrice": 380,
      "foodCostPct": 23.0,
      "grossMargin": 292.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yd4mc",
    "name": "Chicken Reshmi Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yttra",
    "name": "Chicken Malai Tikka",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 420,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 96.6,
      "sellingPrice": 420,
      "foodCostPct": 23.0,
      "grossMargin": 323.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yo1r9",
    "name": "Chicken Afgani Tandoori",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 580,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 133.4,
      "sellingPrice": 580,
      "foodCostPct": 23.0,
      "grossMargin": 446.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ykcbq",
    "name": "Chicken Tangadi Kebab",
    "cat": "Tandoori Menu",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 80.5,
      "sellingPrice": 350,
      "foodCostPct": 23.0,
      "grossMargin": 269.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y97d8",
    "name": "Chicken Lolipop Oil Fry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 220,
    "halfPrice": 0,
    "image": "images/indus_chicken_lollipop.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 50.6,
      "sellingPrice": 220,
      "foodCostPct": 23.0,
      "grossMargin": 169.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yy3w1",
    "name": "Chicken Lolipop Masala Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_chicken_lollipop.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 57.5,
      "sellingPrice": 250,
      "foodCostPct": 23.0,
      "grossMargin": 192.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yg3s7",
    "name": "Chicken Hot Garlic Wings",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_chicken_lollipop.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yh1gi",
    "name": "Veg Chilli Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_chilli_paneer.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 66.6,
      "sellingPrice": 370,
      "foodCostPct": 18.0,
      "grossMargin": 303.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y7ez2",
    "name": "Paneer Chilli Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_chilli_paneer.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ysfhw",
    "name": "Chicken Chilli Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_chilli_paneer.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 89.7,
      "sellingPrice": 390,
      "foodCostPct": 23.0,
      "grossMargin": 300.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ycv2h",
    "name": "Veg 65 Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 63.0,
      "sellingPrice": 350,
      "foodCostPct": 18.0,
      "grossMargin": 287.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yufli",
    "name": "Paneer 65 Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yyo9y",
    "name": "Chicken 65 Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yc0cj",
    "name": "Veg Crispy",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 66.6,
      "sellingPrice": 370,
      "foodCostPct": 18.0,
      "grossMargin": 303.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yry34",
    "name": "Paneer Crispy",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yc355",
    "name": "Chicken Crispy",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 89.7,
      "sellingPrice": 390,
      "foodCostPct": 23.0,
      "grossMargin": 300.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yma5m",
    "name": "Veg Dragon Chicken",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 85.1,
      "sellingPrice": 370,
      "foodCostPct": 23.0,
      "grossMargin": 284.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ysfqq",
    "name": "Paneer Dragon Chicken",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 440,
      "foodCostPct": 23.0,
      "grossMargin": 338.8,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ylmvv",
    "name": "Chicken Dragon Chicken",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ygbmc",
    "name": "Veg Manchurian Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 46.8,
      "sellingPrice": 260,
      "foodCostPct": 18.0,
      "grossMargin": 213.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ydgv3",
    "name": "Paneer Manchurian Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 81.4,
      "sellingPrice": 370,
      "foodCostPct": 22.0,
      "grossMargin": 288.6,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yveig",
    "name": "Chicken Manchurian Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 330,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 75.9,
      "sellingPrice": 330,
      "foodCostPct": 23.0,
      "grossMargin": 254.1,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ytdb6",
    "name": "Veg Black Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 70.2,
      "sellingPrice": 390,
      "foodCostPct": 18.0,
      "grossMargin": 319.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yjkh1",
    "name": "Paneer Black Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ye852",
    "name": "Chicken Black Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y8qci",
    "name": "Veg Kung Pao",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 63.0,
      "sellingPrice": 350,
      "foodCostPct": 18.0,
      "grossMargin": 287.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yeqrf",
    "name": "Paneer Kung Pao",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yka31",
    "name": "Chicken Kung Pao",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_dragon_chicken.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ynkh6",
    "name": "Veg Lemon Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 70.2,
      "sellingPrice": 390,
      "foodCostPct": 18.0,
      "grossMargin": 319.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y2wvq",
    "name": "Paneer Lemon Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ygl3j",
    "name": "Chicken Lemon Pepper",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yy2wx",
    "name": "Veg Basil Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 340,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 61.2,
      "sellingPrice": 340,
      "foodCostPct": 18.0,
      "grossMargin": 278.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y1ak3",
    "name": "Paneer Basil Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ynaer",
    "name": "Chicken Basil Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 89.7,
      "sellingPrice": 390,
      "foodCostPct": 23.0,
      "grossMargin": 300.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ywpm5",
    "name": "Veg Magistic",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 64.8,
      "sellingPrice": 360,
      "foodCostPct": 18.0,
      "grossMargin": 295.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yj0x0",
    "name": "Paneer Magistic",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ywnu9",
    "name": "Chicken Magistic",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y1gzz",
    "name": "Veg Roasted Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 64.8,
      "sellingPrice": 360,
      "foodCostPct": 18.0,
      "grossMargin": 295.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ypwxv",
    "name": "Paneer Roasted Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yskxf",
    "name": "Chicken Roasted Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ygk5e",
    "name": "Veg Butter Garlic Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 64.8,
      "sellingPrice": 360,
      "foodCostPct": 18.0,
      "grossMargin": 295.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yqj7n",
    "name": "Paneer Butter Garlic Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yas1l",
    "name": "Chicken Butter Garlic Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yn9g6",
    "name": "Veg Hunan Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 380,
      "foodCostPct": 18.0,
      "grossMargin": 311.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yolym",
    "name": "Paneer Hunan Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y63jr",
    "name": "Chicken Hunan Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 103.5,
      "sellingPrice": 450,
      "foodCostPct": 23.0,
      "grossMargin": 346.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y52wk",
    "name": "Veg Hot Garlic Sauce Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 380,
      "foodCostPct": 18.0,
      "grossMargin": 311.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ywhu0",
    "name": "Paneer Hot Garlic Sauce Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y16rn",
    "name": "Chicken Hot Garlic Sauce Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 103.5,
      "sellingPrice": 450,
      "foodCostPct": 23.0,
      "grossMargin": 346.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ymo0j",
    "name": "Veg Teriyaki",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 380,
      "foodCostPct": 18.0,
      "grossMargin": 311.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ywngv",
    "name": "Paneer Teriyaki",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 94.6,
      "sellingPrice": 430,
      "foodCostPct": 22.0,
      "grossMargin": 335.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yre8e",
    "name": "Chicken Teriyaki",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 420,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.6,
      "sellingPrice": 420,
      "foodCostPct": 23.0,
      "grossMargin": 323.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yukfe",
    "name": "Veg Oyster Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 70.2,
      "sellingPrice": 390,
      "foodCostPct": 18.0,
      "grossMargin": 319.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ygbsq",
    "name": "Paneer Oyster Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yspnf",
    "name": "Chicken Oyster Dry",
    "cat": "Starters",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 105.8,
      "sellingPrice": 460,
      "foodCostPct": 23.0,
      "grossMargin": 354.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yb5t6",
    "name": "Veg Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 200,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 36.0,
      "sellingPrice": 200,
      "foodCostPct": 18.0,
      "grossMargin": 164.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y6d7q",
    "name": "Paneer Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 61.6,
      "sellingPrice": 280,
      "foodCostPct": 22.0,
      "grossMargin": 218.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yan5n",
    "name": "Egg Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 45.6,
      "sellingPrice": 240,
      "foodCostPct": 19.0,
      "grossMargin": 194.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yccgt",
    "name": "Chicken Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 59.8,
      "sellingPrice": 260,
      "foodCostPct": 23.0,
      "grossMargin": 200.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yzmi9",
    "name": "Veg Sezwan Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 220,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 39.6,
      "sellingPrice": 220,
      "foodCostPct": 18.0,
      "grossMargin": 180.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yopmh",
    "name": "Paneer Sezwan Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yrpmi",
    "name": "Egg Sezwan Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 45.6,
      "sellingPrice": 240,
      "foodCostPct": 19.0,
      "grossMargin": 194.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ys7ia",
    "name": "Chicken Sezwan Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y2zsn",
    "name": "Veg Brunt  Garlic Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 54.0,
      "sellingPrice": 300,
      "foodCostPct": 18.0,
      "grossMargin": 246.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y4fo7",
    "name": "Paneer Brunt Garlic Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 79.2,
      "sellingPrice": 360,
      "foodCostPct": 22.0,
      "grossMargin": 280.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y24mt",
    "name": "Egg Brunt  Garlic Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 60.8,
      "sellingPrice": 320,
      "foodCostPct": 19.0,
      "grossMargin": 259.2,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ya3mt",
    "name": "Chicken Brunt Garlic Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y1s8y",
    "name": "Veg Black Pepper Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 45.0,
      "sellingPrice": 250,
      "foodCostPct": 18.0,
      "grossMargin": 205.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yloey",
    "name": "Paneer Black Pepper Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yiki6",
    "name": "Egg Black Pepper Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ycjwu",
    "name": "Chicken Black Pepper Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ypd2k",
    "name": "Veg Hong-Kong Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 230,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 41.4,
      "sellingPrice": 230,
      "foodCostPct": 18.0,
      "grossMargin": 188.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y2s6d",
    "name": "Paneer Hong-Kong Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y3msr",
    "name": "Egg Hong-Kong Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 47.5,
      "sellingPrice": 250,
      "foodCostPct": 19.0,
      "grossMargin": 202.5,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yso17",
    "name": "Chicken Hong-Kong Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 62.1,
      "sellingPrice": 270,
      "foodCostPct": 23.0,
      "grossMargin": 207.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yt2wl",
    "name": "Veg Singapur Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 43.2,
      "sellingPrice": 240,
      "foodCostPct": 18.0,
      "grossMargin": 196.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ydtot",
    "name": "Paneer Singapur Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yl8kg",
    "name": "Egg Singapur Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yl4g6",
    "name": "Chicken Singapur Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ym10z",
    "name": "Veg Spelender Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 43.2,
      "sellingPrice": 240,
      "foodCostPct": 18.0,
      "grossMargin": 196.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y00u1",
    "name": "Paneer Spelender Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y8a4a",
    "name": "Egg Spelender Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 47.5,
      "sellingPrice": 250,
      "foodCostPct": 19.0,
      "grossMargin": 202.5,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y2yq2",
    "name": "Chicken Spelender Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y5yat",
    "name": "Veg Kimchi Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 57.6,
      "sellingPrice": 320,
      "foodCostPct": 18.0,
      "grossMargin": 262.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y2ubu",
    "name": "Paneer Kimchi Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 83.6,
      "sellingPrice": 380,
      "foodCostPct": 22.0,
      "grossMargin": 296.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yhkm3",
    "name": "Egg Kimchi Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 340,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.6,
      "sellingPrice": 340,
      "foodCostPct": 19.0,
      "grossMargin": 275.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yv81f",
    "name": "Chicken Kimchi Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yucrt",
    "name": "Veg Green Chilly Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 46.8,
      "sellingPrice": 260,
      "foodCostPct": 18.0,
      "grossMargin": 213.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yjw3r",
    "name": "Paneer Green Chilly Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yq86a",
    "name": "Egg Green Chilly Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y5rof",
    "name": "Chicken Green Chilly Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y0hmz",
    "name": "Veg Basil Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 46.8,
      "sellingPrice": 260,
      "foodCostPct": 18.0,
      "grossMargin": 213.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ynpnu",
    "name": "Paneer Basil Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yubqe",
    "name": "Egg Basil Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yrojg",
    "name": "Chicken Basil Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y9xve",
    "name": "Veg Shanghai Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 45.0,
      "sellingPrice": 250,
      "foodCostPct": 18.0,
      "grossMargin": 205.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yar88",
    "name": "Paneer Shanghai Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 310,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 68.2,
      "sellingPrice": 310,
      "foodCostPct": 22.0,
      "grossMargin": 241.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yfimq",
    "name": "Egg Shanghai Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y63jz",
    "name": "Chicken Shanghai Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ya70v",
    "name": "Veg Mongolian Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 54.0,
      "sellingPrice": 300,
      "foodCostPct": 18.0,
      "grossMargin": 246.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yl4kz",
    "name": "Paneer Mongolian Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 79.2,
      "sellingPrice": 360,
      "foodCostPct": 22.0,
      "grossMargin": 280.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yl1fo",
    "name": "Egg Mongolian Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 57.0,
      "sellingPrice": 300,
      "foodCostPct": 19.0,
      "grossMargin": 243.0,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y629f",
    "name": "Chicken Mongolian Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 340,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 78.2,
      "sellingPrice": 340,
      "foodCostPct": 23.0,
      "grossMargin": 261.8,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yli97",
    "name": "Veg Korian Fried Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 63.0,
      "sellingPrice": 350,
      "foodCostPct": 18.0,
      "grossMargin": 287.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ytmvp",
    "name": "Paneer Korian Fried Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yzqnb",
    "name": "Egg Korian Fried Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 360,
      "foodCostPct": 19.0,
      "grossMargin": 291.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yni7h",
    "name": "Chicken Korian Fried Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 89.7,
      "sellingPrice": 390,
      "foodCostPct": 23.0,
      "grossMargin": 300.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ymhnd",
    "name": "Veg Thaipatiya Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 64.8,
      "sellingPrice": 360,
      "foodCostPct": 18.0,
      "grossMargin": 295.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ymd9t",
    "name": "Paneer Thaipatiya Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 90.2,
      "sellingPrice": 410,
      "foodCostPct": 22.0,
      "grossMargin": 319.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yd9rl",
    "name": "Egg Thaipatiya Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 70.3,
      "sellingPrice": 370,
      "foodCostPct": 19.0,
      "grossMargin": 299.7,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yjtbd",
    "name": "Chicken Thaipatiya Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yeh92",
    "name": "Veg Combination Rice",
    "cat": "Rice",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 48.6,
      "sellingPrice": 270,
      "foodCostPct": 18.0,
      "grossMargin": 221.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y7h6v",
    "name": "Paneer Combination Rice",
    "cat": "Rice",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 70.4,
      "sellingPrice": 320,
      "foodCostPct": 22.0,
      "grossMargin": 249.6,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yl3ve",
    "name": "Egg Combination Rice",
    "cat": "Rice",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 51.3,
      "sellingPrice": 270,
      "foodCostPct": 19.0,
      "grossMargin": 218.7,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ygjz1",
    "name": "Chicken Combination Rice",
    "cat": "Rice",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 290,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5 mins",
    "cookTime": "2.5 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Steamed & Dehydrated Overnight Long-Grain Rice",
        "qty": "240g",
        "cost": 11.0
      },
      {
        "item": "Finely Diced Vegetables (Carrot, French Beans, Capsicum brunoise)",
        "qty": "50g",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic / Burnt Garlic Flakes (as per dish)",
        "qty": "20g",
        "cost": 4.0
      },
      {
        "item": "Indus Master Stir-Fry Seasoning & Soy Blend",
        "qty": "20ml",
        "cost": 4.5
      },
      {
        "item": "Refined Oil + Infused Garlic/Chili Oil",
        "qty": "25ml",
        "cost": 4.0
      },
      {
        "item": "Spring Onion Whites & Greens",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "Steam rice with 1:1.15 water ratio, spread on sheet pans, and refrigerate overnight to dry surface starch",
      "Brunoise vegetables into tiny 2mm uniform cubes",
      "If Burnt Garlic dish: Fry minced garlic over medium-low flame until deep amber golden, reserve crisp chips and infused oil"
    ],
    "steps": [
      "Heat carbon steel wok over maximum flame until light smoke rises.",
      "Swirl in 20ml cooking oil (or burnt garlic oil). Add egg/protein and flash cook for 25 seconds.",
      "Add minced garlic, ginger, and diced vegetables. Wok-toss for 20 seconds.",
      "Add 240g cold rice. Use the back of the wok ladle to gently break any clumps while tossing.",
      "Drizzle sauce blend and seasonings evenly over the rice.",
      "Toss continuously over roaring flame for 90 seconds so every single grain is toasted, coated, and infused with *Wok Hei* smoke.",
      "Fold in spring onion greens and remove from flame."
    ],
    "plating": "Mound in a warm bowl with a clean dome or package in an insulated delivery container. Top with crispy garlic chips or roasted sesame.",
    "chefTip": "Freshly cooked warm rice will turn into mush in the wok. Only use rice that has rested in the refrigerator for at least 6 hours.",
    "costing": {
      "rawCost": 66.7,
      "sellingPrice": 290,
      "foodCostPct": 23.0,
      "grossMargin": 223.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ynt77",
    "name": "Veg Chilli Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 70.2,
      "sellingPrice": 390,
      "foodCostPct": 18.0,
      "grossMargin": 319.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yzvw9",
    "name": "Paneer Chilli Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 99.0,
      "sellingPrice": 450,
      "foodCostPct": 22.0,
      "grossMargin": 351.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yerir",
    "name": "Egg Chilli Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 74.1,
      "sellingPrice": 390,
      "foodCostPct": 19.0,
      "grossMargin": 315.9,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ylo1d",
    "name": "Chicken Chilli Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 94.3,
      "sellingPrice": 410,
      "foodCostPct": 23.0,
      "grossMargin": 315.7,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yw4us",
    "name": "Veg Hot Garlic Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y7uay",
    "name": "Paneer Hot Garlic Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yk7ir",
    "name": "Egg Hot Garlic Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 76.0,
      "sellingPrice": 400,
      "foodCostPct": 19.0,
      "grossMargin": 324.0,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yyk3h",
    "name": "Chicken Hot Garlic Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 420,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 96.6,
      "sellingPrice": 420,
      "foodCostPct": 23.0,
      "grossMargin": 323.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yh46p",
    "name": "Veg Manchurian Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 380,
      "foodCostPct": 18.0,
      "grossMargin": 311.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y4e7t",
    "name": "Paneer Manchurian Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yxg8g",
    "name": "Egg Manchurian Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.2,
      "sellingPrice": 380,
      "foodCostPct": 19.0,
      "grossMargin": 307.8,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yxtsq",
    "name": "Chicken Manchurian Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yykju",
    "name": "Veg Pot Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yxsfi",
    "name": "Paneer Pot Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yj2ox",
    "name": "Egg Pot Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 77.9,
      "sellingPrice": 410,
      "foodCostPct": 19.0,
      "grossMargin": 332.1,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yqlt5",
    "name": "Chicken Pot Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 98.9,
      "sellingPrice": 430,
      "foodCostPct": 23.0,
      "grossMargin": 331.1,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y4wqs",
    "name": "Veg Lollipop Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yoc9u",
    "name": "Paneer Lollipop Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ygyb5",
    "name": "Egg Lollipop Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 76.0,
      "sellingPrice": 400,
      "foodCostPct": 19.0,
      "grossMargin": 324.0,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yxhec",
    "name": "Chicken Lollipop Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 105.8,
      "sellingPrice": 460,
      "foodCostPct": 23.0,
      "grossMargin": 354.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yz6md",
    "name": "Veg Basil Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y8ims",
    "name": "Paneer Basil Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 480,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 105.6,
      "sellingPrice": 480,
      "foodCostPct": 22.0,
      "grossMargin": 374.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yhqee",
    "name": "Egg Basil Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 420,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 79.8,
      "sellingPrice": 420,
      "foodCostPct": 19.0,
      "grossMargin": 340.2,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ywv8p",
    "name": "Chicken Basil Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 105.8,
      "sellingPrice": 460,
      "foodCostPct": 23.0,
      "grossMargin": 354.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yyw3n",
    "name": "Veg Triple  Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 63.0,
      "sellingPrice": 350,
      "foodCostPct": 18.0,
      "grossMargin": 287.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yw2f3",
    "name": "Paneer Triple  Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y5f81",
    "name": "Egg Triple  Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 360,
      "foodCostPct": 19.0,
      "grossMargin": 291.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ydm82",
    "name": "Chicken Triple Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 85.1,
      "sellingPrice": 370,
      "foodCostPct": 23.0,
      "grossMargin": 284.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y50yz",
    "name": "Veg Chopper Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 66.6,
      "sellingPrice": 370,
      "foodCostPct": 18.0,
      "grossMargin": 303.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ycd13",
    "name": "Paneer Chopper Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 440,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 96.8,
      "sellingPrice": 440,
      "foodCostPct": 22.0,
      "grossMargin": 343.2,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yu4wq",
    "name": "Egg Chopper Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.2,
      "sellingPrice": 380,
      "foodCostPct": 19.0,
      "grossMargin": 307.8,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yh0c5",
    "name": "Chicken Chopper Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yjl6s",
    "name": "Veg Claypot Rice",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1youcu",
    "name": "Paneer Claypot Rice",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ytehc",
    "name": "Egg Claypot Rice",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 77.9,
      "sellingPrice": 410,
      "foodCostPct": 19.0,
      "grossMargin": 332.1,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yic8z",
    "name": "Chicken Claypot Rice",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 98.9,
      "sellingPrice": 430,
      "foodCostPct": 23.0,
      "grossMargin": 331.1,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yuqtx",
    "name": "Veg Hunan Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 72.0,
      "sellingPrice": 400,
      "foodCostPct": 18.0,
      "grossMargin": 328.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yyls6",
    "name": "Paneer Hunan Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "veg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y78v4",
    "name": "Egg Hunan Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 77.9,
      "sellingPrice": 410,
      "foodCostPct": 19.0,
      "grossMargin": 332.1,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yksuu",
    "name": "Chicken Hunan Rice with Gravy",
    "cat": "Rice with Gravy",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 430,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "8 mins",
    "cookTime": "5 mins",
    "wokHeat": "Two-Stage (High Flame Rice + Medium Gravy)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Day-Old Steamed Rice (Garlic/Wok tossed base)",
        "qty": "250g",
        "cost": 12.0
      },
      {
        "item": "Finely Minced Garlic & Ginger Brunoise",
        "qty": "25g",
        "cost": 4.0
      },
      {
        "item": "Exotic Veggies (Broccoli, Baby Corn, Mushrooms, Bell Peppers)",
        "qty": "80g",
        "cost": 15.0
      },
      {
        "item": "Indus Master Gravy Base (Dark Soy, Chili Paste, Broth)",
        "qty": "200ml",
        "cost": 14.0
      },
      {
        "item": "Cornstarch Slurry (Water + Starch 2:1)",
        "qty": "30ml",
        "cost": 3.0
      },
      {
        "item": "Refined Oil + Pure Toasted Sesame Oil",
        "qty": "30ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onion Whites & Greens (Separated)",
        "qty": "20g",
        "cost": 2.5
      }
    ],
    "misaRequired": [
      "De-clump chilled day-old rice before wok flash",
      "Prepare diamond cut veggies and blanch broccoli/baby corn for 45 seconds",
      "Keep mother gravy base and cornstarch slurry ready at wok speed rack",
      "Velvet protein beforehand (30 sec low-oil pass)"
    ],
    "steps": [
      "WOK 1 (Base Rice): Heat wok until smoking. Swirl 15ml oil, add 10g minced garlic until golden. Flash-toss the steamed rice with light soy and white pepper on extreme high flame for 90 seconds. Transfer to deep ceramic bowl or claypot.",
      "WOK 2 (Gravy): Wipe wok clean. Heat 15ml oil, add ginger-garlic mince and green chillies. Saut\u00e9 for 15 seconds until aromatic.",
      "Add protein and diamond-cut vegetables, flash-stir fry over high heat for 60 seconds.",
      "Pour in Indus mother gravy base and seasoned vegetable broth. Bring to a rolling boil.",
      "Gradually stream in cornstarch slurry while stirring continuously until a rich, glossy, nap-coating viscosity is achieved.",
      "Finish with 5ml pure toasted sesame oil and chopped spring onion whites.",
      "Carefully ladle the piping hot sizzling gravy over the mound of wok-toasted rice."
    ],
    "plating": "Serve immediately in a deep heated Asian ceramic bowl or cast-iron claypot. Garnish with a ring of finely sliced scallion greens and toasted sesame.",
    "chefTip": "Never pour cold slurry directly into hot broth without stirring; it causes clumps. Always swirl sesame oil at the very end off the flame to preserve volatile aromatics.",
    "costing": {
      "rawCost": 98.9,
      "sellingPrice": 430,
      "foodCostPct": 23.0,
      "grossMargin": 331.1,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yyo5v",
    "name": "CHI Urasaki",
    "cat": "Sushi",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 550,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 121.0,
      "sellingPrice": 550,
      "foodCostPct": 22.0,
      "grossMargin": 429.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yxqxm",
    "name": "Tempura Sushi",
    "cat": "Sushi",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 550,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 121.0,
      "sellingPrice": 550,
      "foodCostPct": 22.0,
      "grossMargin": 429.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ybvz0",
    "name": "Chicken Teriyaki sushi Sushi",
    "cat": "Sushi",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 103.5,
      "sellingPrice": 450,
      "foodCostPct": 23.0,
      "grossMargin": 346.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yzdcn",
    "name": "Philadelphia Veg Sushi",
    "cat": "Sushi",
    "sub": "",
    "veg": "veg",
    "fullPrice": 500,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 90.0,
      "sellingPrice": 500,
      "foodCostPct": 18.0,
      "grossMargin": 410.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y33ix",
    "name": "Borwn Garlic Sushi",
    "cat": "Sushi",
    "sub": "",
    "veg": "veg",
    "fullPrice": 500,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 90.0,
      "sellingPrice": 500,
      "foodCostPct": 18.0,
      "grossMargin": 410.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ygwmo",
    "name": "CHI Miso Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 99.0,
      "sellingPrice": 450,
      "foodCostPct": 22.0,
      "grossMargin": 351.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y8pas",
    "name": "Veg Miso Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "veg",
    "fullPrice": 450,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 81.0,
      "sellingPrice": 450,
      "foodCostPct": 18.0,
      "grossMargin": 369.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ya3wb",
    "name": "Spicy Korean Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 470,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 103.4,
      "sellingPrice": 470,
      "foodCostPct": 22.0,
      "grossMargin": 366.6,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yjqwp",
    "name": "Shoyu Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 460,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 101.2,
      "sellingPrice": 460,
      "foodCostPct": 22.0,
      "grossMargin": 358.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ysayl",
    "name": "Prawns Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 550,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Cleaned & De-veined Tiger Prawns (8 pcs / 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 154.0,
      "sellingPrice": 550,
      "foodCostPct": 28.0,
      "grossMargin": 396.0,
      "grossMarginPct": 72.0
    }
  },
  {
    "id": "mmszgir1ydep7",
    "name": "Exotic Veg Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "veg",
    "fullPrice": 480,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 86.4,
      "sellingPrice": 480,
      "foodCostPct": 18.0,
      "grossMargin": 393.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ykyq7",
    "name": "Red/Green/Yellow Curry Ramen",
    "cat": "Ramen",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 480,
    "halfPrice": 0,
    "image": "images/indus_ramen_sushi.jpg",
    "prepTime": "8 mins",
    "cookTime": "6 mins",
    "wokHeat": "Simmer & Broth Assembly",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "100g",
        "cost": 30.0
      },
      {
        "item": "Artisanal Ramen Noodles / Seasoned Sushi Rice",
        "qty": "180g",
        "cost": 25.0
      },
      {
        "item": "Rich Miso / Shoyu / Korean Broth Base",
        "qty": "300ml",
        "cost": 20.0
      },
      {
        "item": "Ajitsuke Tamago (Seasoned Soft Boiled Ramen Egg)",
        "qty": "1 pc",
        "cost": 10.0
      },
      {
        "item": "Toppings (Nori Sheet, Sweet Corn, Scallions, Sesame)",
        "qty": "30g",
        "cost": 10.0
      }
    ],
    "misaRequired": [
      "Simmer rich dashi/chicken miso broth for 4 hours",
      "Marinate soft-boiled 6-minute eggs in soy-mirin-ginger bath for 12 hours",
      "Slice chashu chicken / protein uniformly"
    ],
    "steps": [
      "Boil fresh ramen noodles in salted water for exactly 2 minutes until springy.",
      "Heat 300ml signature broth in a saucepan with miso/shoyu tare.",
      "Place hot broth in deep ceramic ramen bowl.",
      "Fold in cooked noodles with chopsticks to create a neat bed.",
      "Arrange chashu chicken slices, halved ramen egg, nori sheet, blanched bok choy, and sweet corn on top.",
      "Drizzle chili sesame oil and scatter scallions."
    ],
    "plating": "Serve in authentic heavy ceramic ramen bowl with wooden soup ladle and chopsticks.",
    "chefTip": "Broth must be piping hot (90\u00b0C+) when poured into the bowl to warm the toppings instantly.",
    "costing": {
      "rawCost": 105.6,
      "sellingPrice": 480,
      "foodCostPct": 22.0,
      "grossMargin": 374.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ysk7l",
    "name": "Chicken Steak",
    "cat": "Sizzler",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 480,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 110.4,
      "sellingPrice": 480,
      "foodCostPct": 23.0,
      "grossMargin": 369.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yhwqm",
    "name": "Chicken Triple Fusion",
    "cat": "Sizzler",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 520,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 119.6,
      "sellingPrice": 520,
      "foodCostPct": 23.0,
      "grossMargin": 400.4,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y05n2",
    "name": "Chicken Black Pepper",
    "cat": "Sizzler",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yyapj",
    "name": "Chicken Hunan",
    "cat": "Sizzler",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 550,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 126.5,
      "sellingPrice": 550,
      "foodCostPct": 23.0,
      "grossMargin": 423.5,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yg355",
    "name": "Chicken Tikka",
    "cat": "Sizzler",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 600,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 138.0,
      "sellingPrice": 600,
      "foodCostPct": 23.0,
      "grossMargin": 462.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yyvfq",
    "name": "Exotic Veg Sizzller",
    "cat": "Sizzler",
    "sub": "",
    "veg": "veg",
    "fullPrice": 500,
    "halfPrice": 0,
    "image": "images/indus_pot_rice_gravy.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 90.0,
      "sellingPrice": 500,
      "foodCostPct": 18.0,
      "grossMargin": 410.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ypjap",
    "name": "Chicken Steam momo(6)",
    "cat": "Momo",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 140,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 32.2,
      "sellingPrice": 140,
      "foodCostPct": 23.0,
      "grossMargin": 107.8,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yz0lp",
    "name": "Chicken Jhol momo(6)",
    "cat": "Momo",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 190,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 43.7,
      "sellingPrice": 190,
      "foodCostPct": 23.0,
      "grossMargin": 146.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y42es",
    "name": "Water Big",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yu47j",
    "name": "Thumbs-up Big",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 45,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 8.1,
      "sellingPrice": 45,
      "foodCostPct": 18.0,
      "grossMargin": 36.9,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ysvqb",
    "name": "Water Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 10,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 1.8,
      "sellingPrice": 10,
      "foodCostPct": 18.0,
      "grossMargin": 8.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ykbew",
    "name": "Thumbs-up Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yb9dm",
    "name": "Campa Big",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yulip",
    "name": "Campa Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 10,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 1.8,
      "sellingPrice": 10,
      "foodCostPct": 18.0,
      "grossMargin": 8.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yigkd",
    "name": "Sprite Big",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 45,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 8.1,
      "sellingPrice": 45,
      "foodCostPct": 18.0,
      "grossMargin": 36.9,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yu6zp",
    "name": "Sprite Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ygcqt",
    "name": "Cola Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yjc1w",
    "name": "Fanta Small",
    "cat": "Bevrages",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ycvfr",
    "name": "Extra Schezwan",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y7w3r",
    "name": "Extra Fried noodles",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yvgo9",
    "name": "Extra omlette",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 30,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 5.4,
      "sellingPrice": 30,
      "foodCostPct": 18.0,
      "grossMargin": 24.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ynoo3",
    "name": "Chinese omlette",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 70,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 20.0,
      "sellingPrice": 70,
      "foodCostPct": 28.6,
      "grossMargin": 50.0,
      "grossMarginPct": 71.4
    }
  },
  {
    "id": "mmszgir1yhsph",
    "name": "Extra Chicken",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 40,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 9.2,
      "sellingPrice": 40,
      "foodCostPct": 23.0,
      "grossMargin": 30.8,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yno02",
    "name": "Extra Veggies(Exotic)",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 40,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 7.6,
      "sellingPrice": 40,
      "foodCostPct": 19.0,
      "grossMargin": 32.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ylpy2",
    "name": "Extra Noodles",
    "cat": "Extra",
    "sub": "",
    "veg": "veg",
    "fullPrice": 30,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 5.4,
      "sellingPrice": 30,
      "foodCostPct": 18.0,
      "grossMargin": 24.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ygxbb",
    "name": "Veg Hakka Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 200,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 36.0,
      "sellingPrice": 200,
      "foodCostPct": 18.0,
      "grossMargin": 164.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yxxhl",
    "name": "Paneer Hakka Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 61.6,
      "sellingPrice": 280,
      "foodCostPct": 22.0,
      "grossMargin": 218.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yf8bu",
    "name": "Egg Hakka Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 45.6,
      "sellingPrice": 240,
      "foodCostPct": 19.0,
      "grossMargin": 194.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yw0ec",
    "name": "Chicken Hakka Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 59.8,
      "sellingPrice": 260,
      "foodCostPct": 23.0,
      "grossMargin": 200.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yjw3d",
    "name": "Veg Schezwan Hakka Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 220,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 39.6,
      "sellingPrice": 220,
      "foodCostPct": 18.0,
      "grossMargin": 180.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yp5ir",
    "name": "Paneer Schezwan Hakka Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ybqx0",
    "name": "Egg Schezwan Hakka Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 45.6,
      "sellingPrice": 240,
      "foodCostPct": 19.0,
      "grossMargin": 194.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yhkb2",
    "name": "Chicken Schezwan Hakka Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y3u7d",
    "name": "Veg Brunt Chilly Garlic Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 54.0,
      "sellingPrice": 300,
      "foodCostPct": 18.0,
      "grossMargin": 246.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ytej9",
    "name": "Paneer Brunt Chilly Garlic Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 79.2,
      "sellingPrice": 360,
      "foodCostPct": 22.0,
      "grossMargin": 280.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ymeky",
    "name": "Egg Brunt Chilly Garlic Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 60.8,
      "sellingPrice": 320,
      "foodCostPct": 19.0,
      "grossMargin": 259.2,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yvabt",
    "name": "Chicken Brunt Chilly Garlic Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_burnt_garlic_rice.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y3mf6",
    "name": "Veg Black Pepper Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 45.0,
      "sellingPrice": 250,
      "foodCostPct": 18.0,
      "grossMargin": 205.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yais4",
    "name": "Paneer Black Pepper Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y8g1a",
    "name": "Egg Black Pepper Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y473j",
    "name": "Chicken Black Pepper Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y964b",
    "name": "Veg Hong-Kong Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 230,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 41.4,
      "sellingPrice": 230,
      "foodCostPct": 18.0,
      "grossMargin": 188.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yp9lo",
    "name": "Paneer Hong-Kong Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yp5zn",
    "name": "Egg Hong-Kong Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 47.5,
      "sellingPrice": 250,
      "foodCostPct": 19.0,
      "grossMargin": 202.5,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ye6hm",
    "name": "Chicken Hong-Kong Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 62.1,
      "sellingPrice": 270,
      "foodCostPct": 23.0,
      "grossMargin": 207.9,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yc57n",
    "name": "Veg Singapore Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 43.2,
      "sellingPrice": 240,
      "foodCostPct": 18.0,
      "grossMargin": 196.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ymkvz",
    "name": "Paneer Singapore Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ydxyw",
    "name": "Egg Singapore Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yrjg4",
    "name": "Chicken Singapore Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yrffu",
    "name": "Veg Splender Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 240,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 43.2,
      "sellingPrice": 240,
      "foodCostPct": 18.0,
      "grossMargin": 196.8,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ys20w",
    "name": "Paneer Splender Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yns5c",
    "name": "Egg Splender Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 47.5,
      "sellingPrice": 250,
      "foodCostPct": 19.0,
      "grossMargin": 202.5,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y416x",
    "name": "Chicken Splender Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ycige",
    "name": "Veg Kimchi Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 57.6,
      "sellingPrice": 320,
      "foodCostPct": 18.0,
      "grossMargin": 262.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ynllz",
    "name": "Paneer Kimchi Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 380,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 83.6,
      "sellingPrice": 380,
      "foodCostPct": 22.0,
      "grossMargin": 296.4,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ygkre",
    "name": "Egg Kimchi  Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 340,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.6,
      "sellingPrice": 340,
      "foodCostPct": 19.0,
      "grossMargin": 275.4,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1ydupb",
    "name": "Chicken Kimchi Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 82.8,
      "sellingPrice": 360,
      "foodCostPct": 23.0,
      "grossMargin": 277.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ywubs",
    "name": "Veg Green Chilly  Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 46.8,
      "sellingPrice": 260,
      "foodCostPct": 18.0,
      "grossMargin": 213.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y98ul",
    "name": "Paneer Green Chilly Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yhuif",
    "name": "Egg Green Chilly Hakka Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y3wno",
    "name": "Chicken Green Chilly Hakka Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y6ske",
    "name": "Veg Basil Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 46.8,
      "sellingPrice": 260,
      "foodCostPct": 18.0,
      "grossMargin": 213.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yklp4",
    "name": "Paneer Basil  Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.0,
      "sellingPrice": 300,
      "foodCostPct": 22.0,
      "grossMargin": 234.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1ynetn",
    "name": "Egg Basil  Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yc4zq",
    "name": "Chicken Basil  Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yna27",
    "name": "Veg Shanghai  Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 250,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 45.0,
      "sellingPrice": 250,
      "foodCostPct": 18.0,
      "grossMargin": 205.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yvh4s",
    "name": "Paneer Shanghai  Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 310,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 68.2,
      "sellingPrice": 310,
      "foodCostPct": 22.0,
      "grossMargin": 241.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yzoxm",
    "name": "Egg Shanghai  Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 49.4,
      "sellingPrice": 260,
      "foodCostPct": 19.0,
      "grossMargin": 210.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yqvq9",
    "name": "Chicken Shanghai  Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 280,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.4,
      "sellingPrice": 280,
      "foodCostPct": 23.0,
      "grossMargin": 215.6,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yjjmq",
    "name": "Veg Mongolian  Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 54.0,
      "sellingPrice": 300,
      "foodCostPct": 18.0,
      "grossMargin": 246.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yeui2",
    "name": "Paneer Mongolian  Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 79.2,
      "sellingPrice": 360,
      "foodCostPct": 22.0,
      "grossMargin": 280.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yufj5",
    "name": "Egg Mongolian  Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 300,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 57.0,
      "sellingPrice": 300,
      "foodCostPct": 19.0,
      "grossMargin": 243.0,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yw67g",
    "name": "Chicken Mongolian  Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 340,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 78.2,
      "sellingPrice": 340,
      "foodCostPct": 23.0,
      "grossMargin": 261.8,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y82k1",
    "name": "Veg Korean  Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 350,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 63.0,
      "sellingPrice": 350,
      "foodCostPct": 18.0,
      "grossMargin": 287.0,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ypdmt",
    "name": "Paneer Korean  Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 88.0,
      "sellingPrice": 400,
      "foodCostPct": 22.0,
      "grossMargin": 312.0,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y4n2z",
    "name": "Egg Korean  Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 68.4,
      "sellingPrice": 360,
      "foodCostPct": 19.0,
      "grossMargin": 291.6,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1y6zlm",
    "name": "Chicken Korean  Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 390,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 89.7,
      "sellingPrice": 390,
      "foodCostPct": 23.0,
      "grossMargin": 300.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yqh07",
    "name": "Veg Thai Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 360,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 64.8,
      "sellingPrice": 360,
      "foodCostPct": 18.0,
      "grossMargin": 295.2,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yn38w",
    "name": "Paneer Thai Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 410,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 90.2,
      "sellingPrice": 410,
      "foodCostPct": 22.0,
      "grossMargin": 319.8,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1y9yq3",
    "name": "Egg Thai Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 370,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 70.3,
      "sellingPrice": 370,
      "foodCostPct": 19.0,
      "grossMargin": 299.7,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yisl3",
    "name": "Chicken Thai Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 400,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 92.0,
      "sellingPrice": 400,
      "foodCostPct": 23.0,
      "grossMargin": 308.0,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1yus3j",
    "name": "Veg Combination Noodles",
    "cat": "Noodles",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 48.6,
      "sellingPrice": 270,
      "foodCostPct": 18.0,
      "grossMargin": 221.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1yz20a",
    "name": "Paneer Combination Noodles",
    "cat": "Noodles",
    "sub": "Paneer",
    "veg": "veg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Malai Paneer Cubes (Lightly Dusted 120g)",
        "qty": "120g",
        "cost": 25.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 70.4,
      "sellingPrice": 320,
      "foodCostPct": 22.0,
      "grossMargin": 249.6,
      "grossMarginPct": 78.0
    }
  },
  {
    "id": "mmszgir1yi1z7",
    "name": "Egg Combination Noodles",
    "cat": "Noodles",
    "sub": "Egg",
    "veg": "nonveg",
    "fullPrice": 270,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 51.3,
      "sellingPrice": 270,
      "foodCostPct": 19.0,
      "grossMargin": 218.7,
      "grossMarginPct": 81.0
    }
  },
  {
    "id": "mmszgir1yaepw",
    "name": "Chicken Combination Noodles",
    "cat": "Noodles",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 290,
    "halfPrice": 0,
    "image": "images/indus_hongkong_noodles.jpg",
    "prepTime": "5 mins",
    "cookTime": "3 mins",
    "wokHeat": "Extreme High (Wok Hei 400\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Boiled & Chilled Wheat Hakka Noodles (80% al dente)",
        "qty": "220g",
        "cost": 12.0
      },
      {
        "item": "Julienned Veggies (Cabbage, Carrot, Green & Red Bell Pepper)",
        "qty": "80g",
        "cost": 7.0
      },
      {
        "item": "Indus Seasoning Sauce (Dark Soy, Light Soy, Vinegar, White Pepper)",
        "qty": "25ml",
        "cost": 5.0
      },
      {
        "item": "Minced Garlic & Ginger slivers",
        "qty": "15g",
        "cost": 3.0
      },
      {
        "item": "Wok Oil + Sesame Oil",
        "qty": "25ml",
        "cost": 4.5
      },
      {
        "item": "Spring Onion Greens",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Boil noodles to 80% done, ice-shock, strain, and toss in 10ml oil on perforated racks",
      "Slice all veggies into uniform 1.5mm x 50mm fine juliennes",
      "Pre-mix Indus Dark Soy and white pepper seasoning in a squeeze bottle"
    ],
    "steps": [
      "Season the carbon steel wok over intense flame until blue-hot (Wok Hei ready).",
      "Add 20ml oil and swirl to coat. Crack egg / add velveted protein and flash-scramble for 20 seconds.",
      "Toss in garlic, ginger slivers, and julienned vegetables. Flash stir-fry for 30 seconds maintaining crisp crunch.",
      "Drop in 220g chilled boiled noodles. Keep the wok moving with tossing motion to separate strands.",
      "Drizzle Indus seasoning sauce along the inner perimeter of the hot wok (the sizzle caramelizes the soy sugars).",
      "Add cracked white pepper, aroma seasoning, and spring onion whites. Toss vigorously over 400\u00b0C flame for 60 seconds.",
      "Finish with 5ml sesame oil and spring onion greens. Plate immediately."
    ],
    "plating": "Twirl into an elongated mountain in a branded Indus Wok takeout box or sleek rectangular plate. Garnish with crisp spring onion curls.",
    "chefTip": "Do not overcrowd the wok with more than 2 portions at once; steam will build up and make the noodles soggy instead of dry and smoky.",
    "costing": {
      "rawCost": 66.7,
      "sellingPrice": 290,
      "foodCostPct": 23.0,
      "grossMargin": 223.3,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1y73cy",
    "name": "Mawa ice cream",
    "cat": "Ice Cream",
    "sub": "",
    "veg": "veg",
    "fullPrice": 20,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 3.6,
      "sellingPrice": 20,
      "foodCostPct": 18.0,
      "grossMargin": 16.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1y0zjz",
    "name": "Chicken chilli gravy",
    "cat": "Gravy",
    "sub": "Chicken",
    "veg": "nonveg",
    "fullPrice": 260,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Velveted Boneless Chicken Breast Strips / Dices (100g)",
        "qty": "100g",
        "cost": 24.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 59.8,
      "sellingPrice": 260,
      "foodCostPct": 23.0,
      "grossMargin": 200.2,
      "grossMarginPct": 77.0
    }
  },
  {
    "id": "mmszgir1ysyj7",
    "name": "Delivery fee",
    "cat": "Fee",
    "sub": "",
    "veg": "veg",
    "fullPrice": 30,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Mixed Fresh Vegetables (Cabbage, Carrot, Capsicum 120g)",
        "qty": "120g",
        "cost": 10.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 5.4,
      "sellingPrice": 30,
      "foodCostPct": 18.0,
      "grossMargin": 24.6,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmszgir1ya2up",
    "name": "Mushroom Chilli dry",
    "cat": "Starters",
    "sub": "Veg",
    "veg": "veg",
    "fullPrice": 320,
    "halfPrice": 0,
    "image": "images/indus_chilli_paneer.jpg",
    "prepTime": "6 mins",
    "cookTime": "3.5 mins",
    "wokHeat": "High Flash Fry + Wok Glaze",
    "spice": 2,
    "ingredients": [
      {
        "item": "Fresh Button Mushrooms (Quartered 120g)",
        "qty": "120g",
        "cost": 18.0
      },
      {
        "item": "Cornstarch + Refined Flour Crisping Batter",
        "qty": "35g",
        "cost": 4.0
      },
      {
        "item": "Diamond-Cut Bell Peppers & Onions",
        "qty": "60g",
        "cost": 6.0
      },
      {
        "item": "Indus Signature Sauce (Schezwan / Hot Garlic / Dragon / Manchurian)",
        "qty": "40ml",
        "cost": 9.0
      },
      {
        "item": "Minced Garlic, Ginger & Slit Green Chillies",
        "qty": "20g",
        "cost": 3.5
      },
      {
        "item": "Frying & Wok Oil",
        "qty": "35ml",
        "cost": 5.0
      },
      {
        "item": "Spring Onions & White Sesame Garnish",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Pre-marinate protein with egg white, light soy, and white pepper",
      "Toss protein in cornstarch batter and deep fry in clean oil at 180\u00b0C until golden and ultra-crisp",
      "Prepare diamond cut onions and capsicum (2.5cm precise lozenges)"
    ],
    "steps": [
      "STAGE 1: Deep fry the battered protein in 180\u00b0C oil for 2.5 minutes until crisp and golden. Drain on wire rack.",
      "STAGE 2: Heat wok over high flame. Swirl 15ml oil, add minced garlic, ginger, and slit green chillies. Saut\u00e9 15 seconds.",
      "Add diamond-cut onions and capsicum. Flash toss for 20 seconds over high heat so veggies retain snappy crunch.",
      "Add the signature Indus sauce base, dark soy, vinegar, and a splash of broth. Simmer for 15 seconds to glaze.",
      "Add the hot crispy fried protein into the bubbling glaze. Toss vigorously for 20 seconds so every piece is glossy without becoming soggy.",
      "Kill the flame, toss with chopped spring onion greens."
    ],
    "plating": "Transfer to a heated rectangular slate or platter. Garnish with toasted white sesame seeds and spring onion curls.",
    "chefTip": "Never let the fried protein sit in the sauce simmering. The secret to restaurant-quality starters is a 20-second flash toss right before serving.",
    "costing": {
      "rawCost": 57.6,
      "sellingPrice": 320,
      "foodCostPct": 18.0,
      "grossMargin": 262.4,
      "grossMarginPct": 82.0
    }
  },
  {
    "id": "mmt6e4qgn68k9",
    "name": "extra egg",
    "cat": "Extra",
    "sub": "",
    "veg": "nonveg",
    "fullPrice": 50,
    "halfPrice": 0,
    "image": "images/indus_sauces_misa.jpg",
    "prepTime": "5-8 mins",
    "cookTime": "3-4 mins",
    "wokHeat": "High Flame (Wok Hei 350\u00b0C)",
    "spice": 2,
    "ingredients": [
      {
        "item": "Farm Fresh Eggs (2 pcs whisked)",
        "qty": "2 pcs",
        "cost": 12.0
      },
      {
        "item": "Aromatics & Vegetables",
        "qty": "80g",
        "cost": 8.0
      },
      {
        "item": "Indus Signature Seasoning & Sauce Blend",
        "qty": "30ml",
        "cost": 6.0
      },
      {
        "item": "Refined Cooking Oil",
        "qty": "20ml",
        "cost": 3.5
      },
      {
        "item": "Garnishes & Scallions",
        "qty": "15g",
        "cost": 2.0
      }
    ],
    "misaRequired": [
      "Keep all raw ingredients pre-measured and chilled",
      "Prepare fresh garlic and ginger mince daily",
      "Maintain hot wok ready for cooking"
    ],
    "steps": [
      "Heat wok until smoking hot.",
      "Add oil, aromatics, and protein. Flash stir fry over high flame.",
      "Add sauces, broth, and seasonings.",
      "Toss vigorously until glazed and fully incorporated.",
      "Garnish and serve piping hot."
    ],
    "plating": "Plated cleanly in Indus Wok branded tableware.",
    "chefTip": "Maintain extreme wok heat for signature smokiness.",
    "costing": {
      "rawCost": 9.5,
      "sellingPrice": 50,
      "foodCostPct": 19.0,
      "grossMargin": 40.5,
      "grossMarginPct": 81.0
    }
  }
],
  emergencySubs: [
  {
    "missing": "Schezwan Sauce / Paste",
    "substitute": "Mix 200g Red Chili Paste + 50g Tomato Paste + 20g Garlic Powder + 15ml Soy + 15ml Vinegar + 10g Sugar + 30ml Hot Oil."
  },
  {
    "missing": "Dark Soy Sauce",
    "substitute": "Mix 3 tbsp Light Soy Sauce + 1 tbsp Molasses / Brown Sugar Syrup + 1/2 tsp Balsamic Vinegar."
  },
  {
    "missing": "Chinese Rice Wine / Shaoxing",
    "substitute": "Equal parts Dry White Grape Juice + Rice Vinegar + a tiny pinch of sugar."
  },
  {
    "missing": "Sichuan Peppercorn (Timur)",
    "substitute": "Crushed black peppercorns + ground coriander seed + pinch of grated lemon zest."
  },
  {
    "missing": "Chinkiang Black Vinegar",
    "substitute": "Equal parts Balsamic Vinegar + Rice Vinegar + splash of Soy Sauce."
  },
  {
    "missing": "Cornstarch / Cornflour",
    "substitute": "Potato starch (use 80% quantity) OR Tapioca starch mixed in cold water."
  },
  {
    "missing": "Toasted Sesame Oil",
    "substitute": "Gently toast 2 tbsp white sesame seeds in 4 tbsp refined sunflower oil over low heat for 5 minutes; strain oil."
  },
  {
    "missing": "Oyster Sauce",
    "substitute": "Vegetarian Mushroom Stir-Fry Sauce + 1/2 tsp dark soy + 1/2 tsp sugar."
  },
  {
    "missing": "Gochujang (Korean Red Pepper Paste)",
    "substitute": "3 tbsp Red Chili Paste + 1 tbsp Miso Paste + 1.5 tbsp Honey + 1 tsp Soy Sauce."
  },
  {
    "missing": "Chicken Broth / Stock",
    "substitute": "Boil 1L water with 1 tbsp salt, 1 chopped onion, 4 smashed garlic cloves, 1 star anise, and 1 celery stalk for 15 mins."
  },
  {
    "missing": "Egg (for Velveting)",
    "substitute": "Use 30ml Ice Cold Water + 1/4 tsp Baking Soda + 25g Cornstarch per 1kg chicken."
  },
  {
    "missing": "Spring Onions (Scallions)",
    "substitute": "Finely sliced green tops of leeks OR finely sliced tender chives."
  }
]
};
