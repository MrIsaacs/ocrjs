<script setup lang="ts">
const documentStore = useScanDocumentStore()

const modalObj = ref()
const imageTextScanner = ref()
const add = ref(false)

const imgHandler = ref()
const imageReference = ref()

const openImageTextScanner = (): void => {
  add.value = true
  imageTextScanner.value.modal().show()
}

function openEditModal(record, i) {
  modalObj.value = record
  add.value = false

  imageTextScanner.value.modal().show()
}

function closeModal() {
  imageTextScanner.value.modal().hide()

  imgHandler.value.inputImage = null
  imgHandler.value.text = ''
  imgHandler.value.progress = 0

  imgHandler.value.imageReference = null
  imgHandler.value.imageCropped = ''

  imgHandler.value.cropper = null
  imgHandler.value.cropperReady = false
  imgHandler.value.cropperSetupIsFinished = false
}

function scanCroppedArea() {
  imgHandler.value.scanImage()
}

function saveDocument() {
  imgHandler.value.save()
}
</script>

<template>
  <div class="d-flex">
    <ImageScanner ref="imageTextScanner">
      <template #title="{text}">
        {{ imageReference ? 'Select the area to scan' : text }}
      </template>
      <template #closeButton>
        <CloseButton font-size="5" margin="e-1" @click="closeModal" />
      </template>

      <template #body>
        <ImageHandler ref="imgHandler" v-if="add" />
        <ScansScanView :doc="modalObj" v-if="!add && modalObj" />
      </template>

      <template #footer>
        <b-a
          v-if="add"
          size="lg"
          button="outline-light"
          link="dark"
          font-size="4"
          class="link-opacity-75 link-opacity-100-hover"
          @click="scanCroppedArea"
        >
          <BIcon icon="lucide:file-scan"/> Scan
        </b-a>
        <b-a
          v-if="add"
          size="lg"
          button="outline-light"
          link="success"
          font-size="4"
          class="link-opacity-75 link-opacity-100-hover"
          @click="saveDocument"
        >
          <BIcon icon="fa-solid:save"/> Save
        </b-a>
        <b-a
          size="lg"
          button="outline-light"
          link="secondary"
          font-size="4"
          class="link-opacity-75 link-opacity-100-hover"
          @click="closeModal"
        >
          <BIcon icon="fa-solid:running"/> Exit
        </b-a>
      </template>
    </ImageScanner>

    <Container type="fluid">
      <Divider
        :title="`${documentStore.list.length} document${ documentStore.list.length < 2 && documentStore.list.length !== 0 ? '': 's' }`"
        margin="b-3"
      />
      <Row text-alignment="center">
        <Col>
          <List @trigger="openEditModal" :docs="documentStore.list" />
        </Col>
      </Row>
    </Container>

    <Caller @trigger="openImageTextScanner"/>
  </div>
</template>
