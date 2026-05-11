const vueData = 
[
  {
    id: 1,
    code: true,
    question: "Explain how event handling works in Vue? How can we use mounted and unMounted lifecycle hooks to manage event listeners?",
    answer: `
      <template>
        <button @click="handlerEvent">Click</button>
      </template>

      <script>
        export default {
          methods: {
            handlerEvent() {
              this.$emit('customEvent');
            },
            handlerOnEvent() {
              alert('hi');
            }
          },
          mounted() {
            this.$on('customEvent', this.handlerOnEvent);
          },
          unmounted() {
            this.$off('customEvent', this.handlerOnEvent);
          }
        };
      </script>
    `
  },
  {
    id: 2,
    code: true,
    question: "Props in Vue, how to pass data from parent to child component?",
    answer: `
    // Parent Component
      <template>
        <div>
          <h2>Parent Component</h2>

          <ChildComponent 
            username="Kiran"
            :age="25"
          />
        </div>
      </template>

      <script>
        import ChildComponent from './ChildComponent.vue';

        export default {
          components: { ChildComponent }
        };
      </script>

    // Child Component
      <template>
        <div>
          <h3>Child Component</h3>

          <p>Name: {{ username }}</p>
          <p>Age: {{ age }}</p>
        </div>
      </template>

      <script>
        export default {
          props: {
            username: String,
            age: Number
          }
        };
      </script>
    `
  },
  {
    id: 3,
    code: true,
    question: "Props in Vue, how to call an event from child to parent component?",
    answer: `
    // Child Component
      <template>
        <button @click="handlerEvent">Click</button>
      </template>

      <script>
        export default {
          emits: ['customEvent'],
          methods: {
            handlerEvent() {
              this.$emit('customEvent');
            }
          }
        };
      </script>

    // Parent Component
      <template>
        <ChildComponent @customEvent="handlerOnEvent" />
      </template>

      <script>
        import ChildComponent from './ChildComponent.vue';

        export default {
          components: { ChildComponent },
          methods: {
            handlerOnEvent() {
              alert('hi');
            }
          }
        };
      </script>
    `
  },
  {
    id: 4,
    code: true,
    question: "Options API vs Composition API in Vue",
    answer: `
    ✅ Core Difference
        - Options API → Organizes code by options (data, methods, computed, etc.)
        - Composition API → Organizes code by feature/logic using setup()

    // Options API (Old / Traditional)
        <script>
          export default {
            data() {
              return {
                count: 0
              };
            },
            methods: {
              increment() {
                this.count++;
              }
            }
          };
        </script>

    // Characteristics
       - Easy to learn (good for beginners)
       - Code is split into sections (data, methods, etc.)
       - Uses this keyword
       - Harder to manage in large components (logic gets scattered)
       - Code Reusability via Mixins.
       - Limited TypeScript support
       - Small/simple component → Options API


    // Composition API (Modern)
        <script>
          import { ref } from 'vue';

          export default {
            setup() {
              const count = ref(0);

              const increment = () => {
                count.value++;
              };

              return { count, increment };
            }
          };
        </script>

    // Characteristics
       - Organizes code by feature (logic together)
       - No this keyword
       - Better for large and complex applications
       - Code Reusable logic via composables
       - Slightly harder to learn initially
       - Excellent TypeScript support
       - Large/complex logic → Composition API
    `
  },
  {
    id: 5,
    code: true,
    question: "How can we bind text in vue? What are the different ways to bind text in vue?",
    answer: `
    1. Mustache Interpolation (Most Common)
        <template>
          <p>{{ message }}</p>
        </template>

        <script>
         data() {
            return {
              message: 'Hello, Vue!'
            };
         }
        </script>

    2. v-text Directive
        <template>
          <p v-text="message"></p>
        </template>

        <script>
         data() {
            return {
              message: 'Hello, Vue!'
            };
         }
        </script>

    3. v-html (Render HTML Content)
        <template>
          <p v-html="htmlContent"></p>
        </template>

        <script>
         data() {
            return {
              htmlContent: '<b>Hello, Vue!</b>'
            };
         }
        </script>
    `
  },
  {
    id: 6,
    code: true,
    question: "What is Attribute Binding in Vue? How to bind attributes in Vue?",
    answer: `
    In Vue, attribute binding is done using v-bind (or its shorthand :). 
    It lets you dynamically set HTML attributes using data from your component.
    
    // Example of Attribute Binding
        <template>
          <a :href="link" :title="tooltip">Visit</a>
        </template>

        <script>
        export default {
          data() {
            return {
              link: 'https://example.com',
              tooltip: 'Go to website'
            };
          }
        };
        </script>

    // Binding Boolean Attributes
        <template>
          <button :disabled="isDisabled">Click</button>
        </template>

        <script>
        export default {
          data() {
            return {
              isDisabled: true
            };
          }
        };
        </script>
    `
  },
  {
    id: 7,
    code: true,
    question: "What is Class binding in Vue? How to bind class in Vue?",
    answer: `
      In Vue, class binding is done using v-bind (or its shorthand :). 
      It lets you dynamically set CSS classes using data from your component.

      <template>
        <p :class="{ active: isActive }">Hello</p>
      </template>

      <script>
        export default {
          data() {
            return {
              isActive: true
            };
          }
        };
      </script>
    `
  },
  {
    id: 8,
    code: true,
    question: "What is Style binding in Vue? How to bind style in Vue?",
    answer: `
      In Vue, style binding is done using v-bind (or its shorthand :). 
      It lets you dynamically set CSS styles using data from your component.
      
      <template>
        <p :style="{ color: textColor, fontSize: fontSize }">Hello</p>
      </template>

      <script>
        export default {
          data() {
            return {
              textColor: 'blue',
              fontSize: '16px'
            };
          }
        };
      </script>
    `
  },
  {
    id: 9,
    code: true,
    question: "Conditional rendering in Vue, how to conditionally render elements in Vue?",
    answer: `
    In Vue, conditional rendering means showing or hiding elements based on a condition.

    1. For multiple conditions, we can use v-if, v-else-if, and v-else directives.
        <template>
          <p v-if="score >= 90">Grade A</p>
          <p v-else-if="score >= 60">Grade B</p>
          <p v-else>Fail</p>
        </template>

    2. For simple show/hide, we can use v-show directive.
        <template>
          <p v-show="isVisible">Hello</p>
        </template>

        <script>
        export default {
          data() {
            return {
              isVisible: false
            };
          }
        };
        </script>

    - Rendering with v-if completely removes the element from the DOM when the condition is false, 
      while v-show only toggles the display CSS property.
    - performance-wise, v-show is better for toggling visibility frequently, 
      while v-if is better for conditions that change less often.
    `
  },
  {
    id: 10,
    code: true,
    question: "what is List rendering in Vue? How to render lists in Vue?",
    answer: `
    v-for is used to loop through arrays, objects, or a range and render elements for each item.
    - Always use :key for better performance
    - v-for can iterate arrays, objects, and numbers
    
    // 1. Loop through an Array
      <template>
        <ul>
          <li v-for="(item, index) in fruits" :key="index">
            {{ index }} - {{ item }}
          </li>
        </ul>
      </template>

      <script>
        export default {
          data() {
            return {
              fruits: ['Apple', 'Banana', 'Mango']
            };
          }
        };
      </script>

      // Output:
        0 - Apple  
        1 - Banana  
        2 - Mango

    // 2. Loop through an Object
      <template>
        <ul>
          <li v-for="(value, key) in user" :key="key">
            {{ key }} : {{ value }}
          </li>
        </ul>
      </template>

      <script>
        export default {
          data() {
            return {
              user: {
                name: 'Kiran',
                age: 25
              }
            };
          }
        };
      </script>

    // 3. Loop through Array of Objects
      <template>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.name }} - {{ user.age }}
          </li>
        </ul>
      </template>

      <script>
        export default {
          data() {
            return {
              users: [
                { id: 1, name: 'Kiran', age: 25 },
                { id: 2, name: 'Ravi', age: 28 }
              ]
            };
          }
        };
      </script>
    `
  },
  {
    id: 11,
    code: true,
    question: "What is Event handling in Vue? How to handle events in Vue?",
    answer: `
    In Vue, event handling is used to respond to user actions like clicks, typing, form submission, etc. 
    It’s done using the v-on directive (or shorthand @).

    1. Click Event
        <template>
          <button @click="greet('Kiran')">Greet</button>
        </template>

        <script>
          export default {
            methods: {
              greet(name) {
                alert('Hello ' + name);
              }
            }
          };
        </script>
    
    2. Event Modifiers (Important)
        <template>
          <form @submit.prevent="handleSubmit">
            <button type="submit">Submit</button>
          </form>
        </template>

        <template>
          <button @click.once="greet()">Greet</button>
        </template>

        <template>
          <input @keyup.enter="submitForm" />
        </template>

        - .prevent → prevents default behavior
        - .stop → stop propagation
        - .once → run only once
        - .capture → capture phase
        - .enter → trigger on Enter key
    `
  },
  {
    id: 12,
    code: true,
    question: "What is two way data binding in Vue? How to implement two way data binding in Vue?",
    answer: `
    Two-way binding (v-model) is mainly used in real-world scenarios like form handling, 
    search filters, live validation, and settings toggles. It helps keep UI and data in sync automatically, 
    which reduces manual event handling and simplifies code.

    - In Vue, two-way data binding means: data ↔ UI stays in sync automatically
    - When data changes → UI updates
    - When user changes UI → data updates
    - Vue provides v-model for two-way binding.

    * Why it is Useful?
      - As user types in input → data updates → UI can react to changes,
        You can validate, enable/disable button, send API.
        example: username and password fields.
      - Form validation
      - Password validation.
      - Show error if password is less than 5 characters.
        <template>
          <input v-model="username" placeholder="Enter username" />
          <p v-if="username.length < 5">Minimum 5 characters required</p>
        </template>

    
    * Search filter displaying results as user types.
      <template>
          <input v-model="search" placeholder="Search..." />

          <ul>
            <li v-for="item in filteredList" :key="item">
              {{ item }}
            </li>
          </ul>
        </template>

        <script>
          export default {
            data() {
              return {
                search: '',
                items: ['Apple', 'Banana', 'Mango']
              };
            },
            computed: {
              filteredList() {
                return this.items.filter(i =>
                  i.toLowerCase().includes(this.search.toLowerCase())
                );
              }
            }
          };
        </script>
    `
  },
  {
    id: 13,
    code: true,
    question: "Computed properties in Vue, how to use computed properties in Vue?",
    answer: `
    Computed properties in Vue are reactive and cached values derived from other data. 
    They automatically update when their dependencies change and are only recalculated when needed, 
    making them more efficient than methods for complex or repeated computations.
    - They are cached based on their dependencies
    - Vue recalculates them only when dependent data changes
    - If dependencies don’t change, Vue returns the cached result (better performance)
    - Useful for complex calculations, filtering, formatting, or transformations
    - They are declarative, meaning you define what the value should be, not how/when to update it

    <template>
      <div>
        <input v-model="firstName" placeholder="First Name" />
        <input v-model="lastName" placeholder="Last Name" />

        <p>Full Name: {{ fullName }}</p>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            firstName: '',
            lastName: ''
          };
        },
        computed: {
          fullName() {
            return this.firstName + ' ' + this.lastName;
          }
        }
      };
    </script>
    `
  },
  {
    id: 14,
    code: true,
    question: "What is getter and setter for computed properties in Vue?",
    answer: `
    Computed properties in Vue can have both getters and setters. The getter is used to derive and return a value based on reactive data, 
    while the setter allows updating underlying data when the computed property is assigned a new value. 
    This enables controlled two-way binding for derived state.
    - Getter (get) → returns the computed value based on other data
    - Setter (set) → runs when you try to assign a new value to the computed property

    <template>
      <input v-model="fullName" />
      <p>First: {{ firstName }}</p>
      <p>Last: {{ lastName }}</p>
    </template>

    export default {
      data() {
        return {
          firstName: 'Kiran',
          lastName: 'Teja'
        };
      },
      computed: {
        fullName: {
          get() {
            return this.firstName + ' ' + this.lastName;
          },
          set(newValue) {
            const names = newValue.split(' ');
            this.firstName = names[0] || '';
            this.lastName = names[names.length - 1] || '';
          }
        }
      }
    };

    What happens here?
    - Typing in input updates fullName
    - Setter runs → updates firstName & lastName
    - Getter recomputes → UI stays in sync
    `
  },
  {
    id: 15,
    code: true,
    question: "Computed properties vs Methods in Vue, when to use computed properties and when to use methods in Vue?",
    answer: `
    Computed properties are cached and only recomputed when their reactive dependencies change, 
    making them ideal for derived state and performance optimization. 
    Methods are not cached and execute every time they are called, so they are better for actions or logic that must run on each render.

    Computed Properties
    - Cached based on reactive dependencies
    - Recalculate only when dependencies change
    - Best for derived values and performance-heavy logic
      Use when: 
      - value depends on reactive data and doesn’t need to run every time
      
      <template>
        <input v-model="search" placeholder="Search..." />

        <ul>
          <li v-for="item in filteredItems" :key="item">
            {{ item }}
          </li>
        </ul>
      </template>

      <script>
      export default {
        data() {
          return {
            search: '',
            items: ['Apple', 'Banana', 'Mango', 'Orange']
          };
        },
        computed: {
          filteredItems() {
            console.log('Computed called');
            return this.items.filter(i =>
              i.toLowerCase().includes(this.search.toLowerCase())
            );
          }
        }
      };
      </script>

      What Actually Happens
      🟢 Computed
          - Runs only when:
          - search changes
          - items changes
          - Otherwise → returns cached result ✅
      🔴 Method
          - Runs:
          - On every render
          - Even unrelated updates

    Methods
    - Not cached
    - Execute every time they are called (on every re-render)
      Use when:
      - You need fresh execution every time
      - Logic is not dependent on reactive state or must always re-run

      <template>
        <input v-model="search" placeholder="Search..." />

        <ul>
          <li v-for="item in filterItems()" :key="item">
            {{ item }}
          </li>
        </ul>
      </template>

      <script>
      export default {
        data() {
          return {
            search: '',
            items: ['Apple', 'Banana', 'Mango', 'Orange']
          };
        },
        methods: {
          filterItems() {
            console.log('Method called');
            return this.items.filter(i =>
              i.toLowerCase().includes(this.search.toLowerCase())
            );
          }
        }
      };
      </script>

      Problem
      - filterItems() runs every time component re-renders
      - Even if search didn’t change
      - Performance issue for large data

    For example, filtering a large dataset should use computed properties to avoid unnecessary recalculations, 
    whereas methods are suitable for event-driven logic like button clicks.
    `
  },
  {
    id: 16,
    code: true,
    question: "Computed properties vs Watchers in Vue, when to use computed properties and when to use watchers in Vue?",
    answer: `
    Computed properties are used to derive and return values based on reactive data and are cached for performance. 
    Watchers are used to perform side effects like API calls or asynchronous operations when data changes
    
    Computed Properties
    - Used to derive a value from reactive data
    - Cached → recalculates only when dependencies change
    - Should be pure (no side effects)

    <template>
      <p>Full Name: {{ fullName }}</p>
    </template>

    <script>
      export default {
        data() {
          return {
            firstName: 'Kiran',
            lastName: 'Teja'
          };
        },
        computed: {
          fullName() {
            return \\\` \${this.firstName} \${this.lastName}\\\`;
          }
        }
      };
    </script>

    - Use when: you need a calculated value for UI


    Watchers (watch)
    - Used to observe changes and perform actions (side effects)
    - Not cached
    - Triggered whenever watched data changes
    Use when: you need to:
    - Call an API
    - Perform async/side effects
    - Manually react to changes

    <template>
      <input v-model="search" placeholder="Search users..." />
    </template>

    <script>
    export default {
      data() {
        return {
          search: ''
        };
      },
      watch: {
        search(newValue) {
          this.fetchUsers(newValue);
        }
      },
      methods: {
        fetchUsers(query) {
          console.log('API call for:', query);
          // API call happens here
        }
      }
    };
    </script>

    What’s happening here?
    - User types → search changes
    - watch triggers → API call
    - This is a side effect, not a derived value
    - Perfect use of watch
    `
  },
  {
    id: 17,
    code: true,
    question: "What is a Watcher in Vue?",
    answer: `
    - A watcher (watch) in Vue is used to observe changes in reactive data and perform actions when that data changes.
    - A watcher in Vue is used to monitor changes in reactive data and execute custom logic or side effects, 
      such as API calls or asynchronous operations, whenever the data changes.

    <template>
      <input v-model="name" placeholder="Enter name" />
    </template>

    <script>
      export default {
        data() {
          return {
            name: ''
          };
        },
        watch: {
          name(newValue, oldValue) {
            console.log('Name changed from', oldValue, 'to', newValue);
          }
        }
      };
    </script>

    What happens?
    - User types in input
    - name changes
    - Watcher runs automatically

    Important Features
    * Can access:
      - newValue
      - oldValue
    * Can be used for:
      - API calls
      - Validation
      - Logging
      - Async operations
    `
  },
  {
    id: 18,
    code: true,
    question: "What is immediate and deep option in Vue watchers?",
    answer: `
    - In Vue watchers, immediate: true triggers the watcher as soon as the component is initialized, allowing us to handle initial data.
    - deep: true enables watching nested changes inside objects or arrays, since Vue by default only observes top-level changes.

    * immediate: true
      - Runs the watcher right after component initialization
      - Even if the value hasn’t changed yet
      - Useful when you want to act on initial/default data

    * deep: true
      - Used to watch nested changes inside objects/arrays
      - By default, Vue only watches top-level reference changes
      - deep: true allows detecting:
        - Object property updates
        - Array mutations (push, splice, etc.)

    <template>
      <div>
        <input v-model="user.name" />
        <button @click="addHobby">Add Hobby</button>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            user: {
              name: 'Kiran',
              hobbies: ['Cricket']
            }
          };
        },
        watch: {
          user: {
            handler(newVal) {
              console.log('User changed:', newVal);
            },
            deep: true,
            immediate: true
          }
        },
        methods: {
          addHobby() {
            this.user.hobbies.push('Music');
          }
        }
      };
    </script>

    What happens here?
     - immediate: true 
     - Runs once when component loads
     - Logs initial user: { name: 'Kiran', hobbies: ['Cricket'] }

     - deep: true
     - Detects:
       - user.name change
       - user.hobbies.push()
       - 👉 Without deep: true, these changes won’t trigger watcher
    `
  },
  {
    id: 19,
    code: true,
    question: "What is Provide and inject in Vue? How to use provide and inject in Vue?",
    answer: `
    - Provide(Give) and Inject(Take) in Vue are used to pass data from a parent component to deeply nested child components 
      without prop drilling (passing props through every intermediate component).
    - Provide and Inject allow a parent component to share data with any descendant component without passing props through each level. 
      The parent ‘provides’ the data, and any child or nested component can ‘inject’ it directly.
    
    // Example 1
      // Parent Component
          export default {
            data() {
              return {
                name: 'Kiran'
              };
            },
            provide() {
              return {
                username: this.name
              };
            }
          };

      // Child Component (or Deep Nested)
          export default {
            inject: ['username'],
            mounted() {
              console.log(this.username); // Kiran
            }
          };

    // Example 2 (Reactive Provide (Best Practice))
       - By default provide() values are NOT reactive. So if this.name changes → child won’t update
       - To make it reactive, we can use a reactive object or ref.

      // Parent Component
          import { reactive } from 'vue';

            export default {
              setup() {
                const state = reactive({
                  name: 'Kiran'
                });

                return {
                  state
                };
              },
              provide() {
                return {
                  user: this.state
                };
              }
            };

      // Child Component
          export default {
            inject: ['user']
          };

    - When to Use
      ✔ Deeply nested components
      ✔ Avoid prop drilling
      ✔ Sharing global-like data
    
    - When NOT to Use
      ❌ Complex state management
      👉 Use Pinia / Vuex instead
    `
  },
  {
    id: 20,
    code: true,
    question: "What are Slots in Vue?",
    answer: `
    - Slots are used to pass template/content (HTML) from a parent component into a child component, 
      making components more flexible and reusable.
    - Slots in Vue allow a parent component to pass HTML content into a child component. Unlike props, 
      which pass data, slots pass structure (markup), giving more flexibility to customize component layouts.

    - Types of Slots
      1. Default Slot
      2. Named Slots
      3. Scoped Slots (advanced)

    - Example of Default Slot

      // Parent Component
          <ChildComponent>
            <template v-slot:header>
              <h1>Kiranteja</h1>
            </template>

            <template v-slot:default>
              <p>This is default content</p>
            </template>
          </ChildComponent>

      // Child Component
          <template>
            <div>
              <header>
                <slot name="header">Default Header</slot>
              </header>

              <main>
                <slot>Default Content</slot>
              </main>
            </div>
          </template>

    * What’s happening?
      - Parent sends:
        - header slot content (h1)
        - default slot content (p)
      - Child decides where to render it using <slot>
    `
  },
  {
    id: 21,
    code: true,
    question: "How to implement Component and Tab navigation in Vue.",
    answer: `
    We can dynamically render components in Vue by changing a state variable and using conditional rendering (v-if) or 
    the <component :is=""> feature. This is commonly used in tab-based navigation.

      <button @click="activeTab = 'TabA'">Tab A</button>
      <button @click="activeTab = 'TabB'">Tab B</button>
      <button @click="activeTab = 'TabC'">Tab C</button>

      <TabA v-if="activeTab === 'TabA'" />
      <TabB v-if="activeTab === 'TabB'" />
      <TabC v-if="activeTab === 'TabC'" />

    * Problems
      - Repeats multiple v-if
      - Not scalable (if 10 tabs → messy code)
      - Less maintainable
    `
  },
  {
    id: 22,
    code: true,
    question: "How to use Dynamic component rendering in Vue?",
    answer: `
      <template>
        <button @click="activeTab = 'TabA'">Tab A</button>
        <button @click="activeTab = 'TabB'">Tab B</button>
        <button @click="activeTab = 'TabC'">Tab C</button>

        <component :is="activeTabComponent" />
      </template>

      <script>
        import TabA from './TabA.vue';
        import TabB from './TabB.vue';
        import TabC from './TabC.vue';

        export default {
          components: { TabA, TabB, TabC },
          data() {
            return {
              activeTab: 'TabA'
            };
          },
          computed: {
            activeTabComponent() {
              return this.activeTab;
            }
          }
        };
      </script>
    `
  },
  {
    id: 23,
    code: true,
    question: "What is keep-alive in Vue?",
    answer: `
    - <keep-alive> is a built-in Vue component used to cache inactive dynamic components instead of destroying 
      them when they are removed from the DOM.
    - keep-alive is used with dynamic components to preserve their state when switching between them. 
      Instead of destroying and recreating components, Vue caches them, 
      which improves performance and retains data like form inputs.

      <template>
        <button @click="activeTab = 'TabA'">Tab A</button>
        <button @click="activeTab = 'TabB'">Tab B</button>
        <button @click="activeTab = 'TabC'">Tab C</button>

        <keep-alive>
          <component :is="activeTab" />
        </keep-alive>
      </template>

    * What happens?
      - Without keep-alive
      - Switch TabC → TabA → TabC
      - ❌ TabC is destroyed and recreated
      - ❌ Input data is lost

    * With keep-alive
      - Switch TabC → TabA → TabC
      - ✅ TabC is cached (not destroyed)
      - ✅ Input data is preserved
      - Enter name → switch tabs → come back
      - ✅ Name is still there

    * When NOT to Use
      - Avoid if:
      - Too many components → memory usage increases
      - Data should reset every time

    * When using keep-alive, these hooks are used:
      activated() {
        console.log('Component activated');
      },
      deactivated() {
        console.log('Component cached (not destroyed)');
      }
    `
  },
  {
    id: 24,
    code: true,
    question: "What is Teleport in Vue?",
    answer: `
    - Teleport in Vue allows us to render a component’s content in a different DOM location, 
      which is useful for UI elements like modals, tooltips, or popups that need to be placed outside the normal component structure.

    // index.html
        <div id="app"></div>
        <div id="diff-portal"></div>

   // Parent Component
        <template>
          <div>
            <h2>Main App</h2>

            <teleport to="#diff-portal">
              <p>This is teleported content</p>
            </teleport>
          </div>
        </template>

    * Why Teleport is useful?
      - Without teleport: Modal may be affected by parent CSS (overflow, z-index)
      - With teleport: Renders at body level → cleaner UI control

    * Common Use Cases
      - Modals / dialogs
      - Tooltips
      - Dropdowns
      - Notifications
    `
  },
  {
    id: 25,
    code: true,
    question: "How to axis apis in Vue?",
    answer: `
    - GET is used to fetch data, POST to create new data, PUT to update existing data, and DELETE to remove data. 
      In Vue, these are typically handled using Axios inside methods or lifecycle hooks.
    
    <script>
      import axios from 'axios';

      export default {
        data() {
          return {
            users: []
          };
        },
        mounted() {
          this.getUsers();
        },
        methods: {
          async getUsers() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.users = response.data;
          },
          async createUser() {
            const newUser = {
              name: 'Kiran',
              email: 'kiran@example.com'
            };

            const response = await axios.post(API_URL, newUser);
            console.log(response.data);
          },
          async updateUser() {
            const updatedUser = {
              name: 'Kiran Updated',
              email: 'kiran123@example.com'
            };

            const response = await axios.put(\\\` \${API_URL}/1\\\`, updatedUser);
            console.log(response.data);
          },
          async deleteUser() {
            await axios.delete(\\\` \${API_URL}/1\\\`);
            console.log('User deleted');
          }
        }
      };
    </script>
    `
  },
  {
    id: 26,
    code: true,
    question: "What are Lifecycle Hooks in Vue?",
    answer: `
    Lifecycle hooks in Vue are functions that get called at specific stages of a component’s lifecycle, 
    such as creation, mounting, updating, and unmounting, allowing us to execute logic like API calls, DOM manipulation, or cleanup.

    * Correct Hook Names (Fixed)
      - beforeCreate() → called before the component is created (No access to data or methods)
      - created() → called after the component is created (data and methods are available)
      - beforeMount() → called Template compiled, DOM not yet rendered
      - mounted() → called after the component is mounted to the DOM (good for API calls, DOM is ready)
      - beforeUpdate() → called before the component updates (Before DOM updates)
      - updated() → called after the component updates (DOM is re-rendered or After DOM updates)
      - beforeUnmount() → called before the component is unmounted/destroyed
      - unmounted() → called after the component is unmounted/destroyed (good for cleanup)

    // Example Usage
       <script>
        export default {
          data() {
            return {
              count: 0
            };
          },

          beforeCreate() {
            console.log('beforeCreate');
          },
          created() {
            console.log('created');
          },
          beforeMount() {
            console.log('beforeMount');
          },
          mounted() {
            console.log('mounted');
          },
          beforeUpdate() {
            console.log('beforeUpdate');
          },
          updated() {
            console.log('updated');
          },
          beforeUnmount() {
            console.log('beforeUnmount');
          },
          unmounted() {
            console.log('unmounted');
          }
        };
       </script>

    * MISC Hooks (Advanced)
      ✔ activated()
        - Called when component inside <keep-alive> is activated
      ✔ deactivated()
        - Called when component is cached (not destroyed)
      ✔ errorCaptured(err)
        - Catch errors from child components
      ✔ renderTracked()
        - Debug: track reactive dependencies
      ✔ renderTriggered()
        - Debug: what caused re-render
    `
  },
  {
    id: 27,
    code: true,
    question: "What are Template Refs in Vue?",
    answer: `
    - Template refs (ref) are used to directly access DOM elements or child component instances in Vue.
    - Template refs in Vue allow us to directly access DOM elements or component instances using the ref attribute. 
      They are typically used for DOM manipulations like focusing inputs or integrating third-party libraries.
    
    // Example of Template Refs
        <template>
          <div>
            <input type="text" ref="inputRef" />
          </div>
        </template>

        <script>
          export default {
            mounted() {
              this.$refs.inputRef.focus();
            }
          };
        </script>

    * What happens?
      - ref="inputRef" → registers reference
      - this.$refs.inputRef → gives access to the DOM element
      - focus() → sets cursor inside input

    // Example of accessing child component instance
       <ChildComponent ref="childRef" />

       mounted() {
        this.$refs.childRef.someMethod();
       }

    // Important Points
       - $refs are available only after mounted()
       - Not reactive ❌
       - Avoid overusing (breaks Vue reactivity model)
    `
  },
  {
    id: 28,
    code: true,
    question: "What are Mixins in Vue?",
    answer: `
    - Mixins are a way to reuse component logic across multiple components by extracting common code into a 
      separate file and merging it into components.
    - Mixins in Vue are used to reuse common logic across components. A mixin can contain data, methods, computed properties, 
      and lifecycle hooks, which are merged with the component when included.

    // Step 1: Create Mixin File
       // loggerMixin.js
          export default {
            data() {
              return {
                message: 'Hello from mixin'
              };
            },
            methods: {
              showMessage() {
                console.log(this.message);
              }
            },
            mounted() {
              console.log('Mixin mounted');
            }
          };
    // Step 2: Use in Component
        <script>
          import loggerMixin from './loggerMixin';

          export default {
            mixins: [loggerMixin],

            mounted() {
              console.log('Component mounted');
            }
          };
        </script>

    * Real-Time Example
      - Common reusable logic:
      - API handling
      - Form validation
      - Logging
      - Auth checks

    * Important Rules (Interview Important)
      - If both mixin and component have same option (data, method, hook):
        - Data: component’s data takes precedence
        - Methods: component’s method overrides mixin’s method
        - Lifecycle Hooks: both run (mixin first, then component)

    * Problems with Mixins (Very Important)
      - Why modern Vue avoids them:
      - Naming conflicts
      - Hard to track origin of logic
      - Poor readability in large apps

    * Modern Alternative
      - Use Composition API (composables) instead
    `
  },
  {
    id: 29,
    code: true,
    question: "What are Composables (Composition API)?",
    answer: `
    - Composables are functions that use Vue’s Composition API to extract and reuse stateful logic across components. 
      They are a modern alternative to mixins, offering better readability, no naming conflicts, and improved scalability.
    - Composables are reusable functions in Vue (Composition API) that encapsulate and share reactive logic across components.

    * Why Composables over Mixins?
      ✔ No naming conflicts
      ✔ Clear origin of logic
      ✔ Better for large applications
      ✔ More readable and maintainable

    * Step 1: Create Composable
      // useCounter.js
      import { ref } from 'vue';

      export function useCounter() {
        const count = ref(0);

        const increment = () => {
          count.value++;
        };

        return { count, increment };
      }

    * Step 2: Use in Component
      <script setup>
        import { useCounter } from './useCounter';

        const { count, increment } = useCounter();
      </script>

      <template>
        <button @click="increment">Count: {{ count }}</button>
      </template>

    * What’s happening?
      - useCounter() → reusable logic
      - count is reactive
      - Can reuse in multiple components

    * Use cases:
      - API calls (useFetch)
      - Form handling (useForm)
      - Authentication (useAuth)
      - Reusable business logic
    `
  },
  {
    id: 30,
    code: true,
    question: "Difference between Mixins and Composables in Vue?",
    answer: `
    - Mixins merge logic into components implicitly, while Composables explicitly import and use reusable logic functions.
    - Mixins share logic by merging it into components, which can cause naming conflicts and make code harder to trace. 
      Composables, on the other hand, use functions to explicitly reuse logic, making them more readable, maintainable, and suitable for modern Vue applications.

    * Mixins vs Composables
      - Approach
        - Mixins: Merge options into component
        - Composables: Use functions to share logic
      - Clarity
        - Mixins: ❌ Implicit (hard to trace)
        - Composables: ✅ Explicit (easy to track)
      - Naming Conflicts
        - Mixins: ❌ Possible
        - Composables: ✅ No conflicts (just functions)
      - Reusability
        - Mixins: Limited
        - Composables: Highly reusable
      - Debugging
        - Mixins: Hard
        - Composables: Easy
      - Vue Version
        - Mixins: Vue 2 style
        - Composables: Vue 3 (modern)
      - Structure
        - Mixins: Option-based
        - Composables: Function-based
      - TypeScript
        - Mixins: Poor support
        - Composables: Excellent support

    * Key Problem with Mixins
      - You don’t know: where count came from
      - You don’t know: which mixin added which method
      - This creates hidden dependencies
    
    * Composables solve this by making it clear:
      - Explicit import → easy to understand
      - No merging → no conflicts
      - Logic grouped → better readability
      - Scales well in large apps
    `
  },
  {
    id: 31,
    code: true,
    question: "What is Composition API?",
    answer: `
    - The Composition API is a modern way to write Vue components where logic is organized using functions inside the setup() function 
      instead of using options like data, methods, and computed.
    - The Composition API is a modern approach in Vue that allows developers to organize component logic using functions inside the setup() method. 
      It provides better code organization, reusability, and scalability compared to the Options API.

    * Corrected Points from Your Notes
      - setup() runs before component is created → correct
      - ✔ Cleaner structure → correct
      - ✔ Replaces need for beforeCreate & created → partially correct
      - setup() runs before created()
      - You don’t usually need beforeCreate or created because logic is handled inside setup()

    * Why Composition API is Better
      - ✔ Logic grouped by feature (not scattered)
      - ✔ Easy to reuse (composables)
      - ✔ Better for large applications
      - ✔ No this keyword confusion
      - ✔ Strong TypeScript support

    * Why prefer Composition API?
      - Because it improves code organization, reusability, and maintainability, especially in large applications.
    `
  },
  {
    id: 32,
    code: true,
    question: "What is ref in Composition API?",
    answer: `
    - ref is a function in Vue’s Composition API used to create reactive (mutable) data.
    -ref is used to create reactive primitive or object values in the Composition API. 
     It wraps the value in a reactive object, and the actual value is accessed or updated using .value.

    <script setup>
      import { ref } from 'vue';

      const count = ref(0);

      const increment = () => {
        count.value++;
      };
    </script>

    <template>
      <button @click="increment">
        Count: {{ count }}
      </button>
    </template>

    * What’s happening?
      - ref(0) → makes count reactive
      - In JS → use count.value
      - In template → Vue auto unwraps → just {{ count }}

    * Important Points
      - Works with: primitives (string, number, boolean)
      - Works with: objects (but reactive is better for complex objects)
      - Must use .value in JS
      - No .value needed in template
    `
  },
  {
    id: 33,
    code: true,
    question: "What is reactive in Composition API?",
    answer: `
    - reactive is a function in Vue used to create reactive state for objects, making all its properties 
      automatically trackable and responsive to changes.
    - reactive is used in the Composition API to create reactive objects. It makes all properties inside the object 
      reactive without needing .value, allowing direct access and updates.

    <script setup>
      import { reactive } from 'vue';

      const state = reactive({
        count: 0
      });

      const increment = () => {
        state.count++;
      };
    </script>

    <template>
      <button @click="increment">
        Count: {{ state.count }}
      </button>
    </template>

    * What’s happening?
      - reactive() makes the whole object reactive
      - No .value needed
      - UI updates automatically when state.count changes

    * Important Points
      - Works only with objects (including arrays)
      - No .value needed
      - Deeply reactive (nested properties tracked)
    `
  },
  {
    id: 34,
    code: true,
    question: "What is the difference between ref and reactive in Vue’s Composition API?",
    answer: `
    - ref is used for single reactive values (primitive or object), while reactive is used for reactive objects with multiple properties.
    - ref is used for reactive primitive values and requires .value to access in JavaScript, while reactive is used for objects and allows direct property access. 
      ref is preferred for single values, and reactive for complex state.
    - Even objects can use ref: But Access → user.value.name

    * Ref
      - Primitive + Object type (best for string, number, boolean).
      - .value (in JS) to access/update
      - No .value needed in template
      - Use case -> Single value
      - Reassign -> Allowed
      - Reactivity -> Wrapped value
      - Use ref → for simple values
    
    * Reactive
      - Object only (best for objects, forms, grouped state).
      - Direct to access/update
      - Direct in template
      - Use case -> Complex object
      - Reassign -> Not recommended
      - Reactivity -> Proxy object
      - Use reactive → for structured data (objects)
    `
  },
  {
    id: 35,
    code: true,
    question: "What is toRefs in Vue 3 Composition API?",
    answer: `
    - toRefs is a function in Vue’s Composition API used to create reactive object references from reactive objects.
    - toRefs is used in the Composition API to create reactive object references from reactive objects. 
      It creates a new object with the same properties as the original object, but with each property wrapped in a ref.
    - Yes, we can use state.name directly. But destructuring is used for cleaner and more readable code. However, 
      normal destructuring breaks reactivity, so we use toRefs to preserve it

    * Without toRefs (Reactivity Lost)

      <template>
        <div>
          <h3>Name: {{ name }}</h3>
          <h3>Age: {{ age }}</h3>
          <button @click="updateName">Update Name</button>
        </div>
      </template>

      <script>
        import { reactive } from 'vue'

        export default {
          setup() {
            const state = reactive({
              name: 'Kiran',
              age: 30
            })

            const { name, age } = state // ❌ loses reactivity

            const updateName = () => {
              state.name = 'Teja'
            }

            return { name, age, updateName }
          }
        }
      </script>

    * Problem
      - Clicking the button doesn't update the name
      - name and age are not reactive
      - You are copying the value, not the reactivity
      - So name and age are becomes a normal variable. It is no longer linked to state


    * With toRefs (Reactivity Preserved)

      <template>
        <div>
          <h3>Name: {{ name }}</h3>
          <h3>Age: {{ age }}</h3>
          <button @click="updateName">Update Name</button>
        </div>
      </template>

      <script>
        import { reactive, toRefs } from 'vue'

        export default {
          setup() {
            const state = reactive({
              name: 'Kiran',
              age: 30
            })

            const { name, age } = toRefs(state) // ✅ keeps reactivity

            const updateName = () => {
              state.name = 'Teja'
            }

            return { name, age, updateName }
          }
        }
      </script>

    * Solution
      - Clicking the button updates the name
      - name and age are reactive
      - name is a ref, So still connected to state.name
      - UI updates properly.
    `
  },
  {
    id: 36,
    code: true,
    question: "Method example for Optional API and Composition API",
    answer: `
    - In Options API, methods are defined inside the methods object and accessed using this, 
      whereas in Composition API, functions are defined inside setup() and use reactive variables like ref.

    1. Options API (Vue 2 / Vue 3)
        <template>
          <div>
            <h3>Count: {{ count }}</h3>
            <button @click="increment">Increment</button>
          </div>
        </template>

        <script>
          export default {
            data() {
              return {
                count: 0
              }
            },
            methods: {
              increment() {
                this.count++
              }
            }
          }
        </script>

      * Uses this to access data

    2. Composition API (Vue 3)
        <template>
          <div>
            <h3>Count: {{ count }}</h3>
            <button @click="increment">Increment</button>
          </div>
        </template>

        <script>
          import { ref } from 'vue'

          export default {
            setup() {
              const count = ref(0)

              const increment = () => {
                count.value++
              }

              return { count, increment }
            }
          }
        </script>

      * No this, uses ref and .value
    `
  },
  {
    id: 37,
    code: true,
    question: "Example of using v-model in Options API and Composition API.",
    answer: `
    - In Options API, v-model binds directly to data properties. In Composition API, it works with ref variables or reactive properties, 
      and when using reactive, we use toRefs to maintain reactivity.

    1. Options API Example (Vue 2 / Vue 3)
        <template>
          <div>
            <input type="text" v-model="count" placeholder="Count" />
            <input type="text" v-model="firstName" placeholder="First Name" />
            <input type="text" v-model="lastName" placeholder="Last Name" />

            <h3>Count: {{ count }}</h3>
            <h3>Full Name: {{ firstName }} {{ lastName }}</h3>
          </div>
        </template>

        <script>
          export default {
            data() {
              return {
                count: 0,
                firstName: '',
                lastName: ''
              }
            }
          }
        </script>

     👉 Uses data() and this internally
     👉 v-model directly binds to data properties


    2. Composition API Example (<script setup> - Recommended)
        <template>
          <div>
            <input v-model="count" placeholder="Count" />
            <input v-model="firstName" placeholder="First Name" />
            <input v-model="lastName" placeholder="Last Name" />

            <h3>Count: {{ count }}</h3>
            <h3>Full Name: {{ firstName }} {{ lastName }}</h3>
          </div>
        </template>

        <script setup>
          import { ref, reactive, toRefs } from 'vue'

          const count = ref(0)

          const state = reactive({
            firstName: '',
            lastName: ''
          })

          const { firstName, lastName } = toRefs(state)
        </script>
      
      👉 Uses ref and reactive
      👉 toRefs is used to keep reactivity when destructuring

    
    `
  },
  {
    id: 38,
    code: true,
    question: "How to use custom v-model in a child component?",
    answer: `
    - Custom v-model allows parent and child components to have two-way binding.
    - By default, Vue uses:
      - Prop → modelValue
      - Event → update:modelValue

    // Parent Component
        <template>
          <div>
            <ChildComponent v-model="name" />

            <h3>Parent Value: {{ name }}</h3>
          </div>
        </template>

        <script setup>
          import { ref } from 'vue'
          import ChildComponent from './ChildComponent.vue'

          const name = ref('')
        </script>

    // Child Component
        
    `
  },
  {
    id: 39,
    code: true,
    question: "Angular js",
    answer: "this is answer 1"
  },
]

export default vueData;