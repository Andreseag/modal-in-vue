Vue.component('modal', {

    props: ['data'],

    created() {
        console.log(this.data.isShowModal)
    },

    methods: {
        toggleShowModal() {
            this.$emit('show-modal');
        }
    },
    
    template: `
      <div v-show="data.isShowModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container box p-0">
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Amazing Modal!
                    </p>
                </div>
            </section>
            <section class="content mt-4 px-6">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
            </section>
            <footer class="is-flex is-justify-content-center pb-5">
              <button class="button is-primary" v-on:click="toggleShowModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',

    data() {
        return {
            modalData: {
                isShowModal: false
            }
        }
    },

    methods: {
        showModal() {
            this.modalData.isShowModal = !this.modalData.isShowModal
        }
    }
  })