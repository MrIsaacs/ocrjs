<script setup lang="ts">
const modalRef = ref()

defineExpose({
  modal: function(){
    return modalRef.value
  }
})

</script>

<template>
  <Modal ref="modalRef">
    <ModalDialog
      scrollable
      class="modal-xl"
    >
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            <slot name="title" :text="'Add your image here'" />
          </ModalTitle>
          <slot name="closeButton">
            <CloseButton font-size="5" margin="e-1" @click="modalRef.hide()" />
          </slot>
        </ModalHeader>
        <ModalBody>
          <slot name="body" />
        </ModalBody>
        <ModalFooter>
          <slot name="footer">
            <b-a
              size="lg"
              button="outline-light"
              link="secondary"
              font-size="4"
              class="link-opacity-75 link-opacity-100-hover"
               @click="modalRef.hide()"
            >
              <BIcon icon="fa-solid:running"/> Exit
            </b-a>
          </slot>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
</template>
