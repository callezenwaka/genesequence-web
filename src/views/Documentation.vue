<template>
  <div class="documentation">
    <Header></Header>
    <div class="container">
      <section class="introduction">
        <div class="starting">
          <h1 class="page--title">Introduction</h1>
          <p>Gene sequence library is a lightweight bioinformatics python library that supports both the <code>CLI</code> and <code>GUI</code>. A step by step process on installation for either option is detailed below. The CLI works on any operating system that supports python package installation with <code>pip</code>, while the <code>GUI</code> works on most modern browsers.</p>
          <p>To get started, follow the instructions outlined below.</p>
        </div>
      </section>
      <section class="section">
        <div>
          <h2>Using CLI:</h2>
        </div>
      </section>
      <section class="section installation">
        <div class="section--item prerequisite">
          <h3>Prerequisites</h3>
          <p>Verify that the latest version of python is installed by opening the <code>terminal</code> or <code>cmd</code> and running the following command:</p>
          <div class="command">
            <div><code>python</code></div>
            <Clipboard source="python"></Clipboard>
          </div>
          <p>This will set the <code>terminal</code> or <code>cmd</code> to python mode if it is already installed. If otherwise, kindly follow documentation for your preferred OS.</p>
        </div>
        <div class="section--item install">
          <h3>Installation</h3>
          <p>To start using <b>Gene Sequence</b> package, install using the command below:</p>
          <div class="command">
            <div><code>pip install genesequence</code></div>
            <Clipboard source="pip install genesequence"></Clipboard>
          </div>
          <p>This command will install the package. It is advised that separate environment is used for respective projects. Check online for best practices.</p>
        </div>
      </section><hr>
      <section class="section instantiation">
        <div class="section--item import">
          <h3>Importing Package</h3>
          <p>Following successful installation, enter into a python environment and import package with the following command:</p>
          <div class="command">
            <div><code>from genesequence import Sequence</code></div>
            <Clipboard source="from genesequence import Sequence"></Clipboard>
          </div>
        </div>
        <div class="section--item instantiate">
          <h3>Instantiating Object</h3>
          <p>Instantiate an gene sequence object to begin working with sequence strands using the command below:</p>
          <div class="command">
            <div><code>sequence = Sequence()</code></div>
            <Clipboard source="sequence = Sequence()"></Clipboard>
          </div>
        </div>
      </section><hr>
      <section class="section validation">
        <div class="section--item getting">
          <h3>Getting Sequence</h3>
          <p>To get started quikly, call the <code>get_sequence</code> method with the command:</p>
          <div class="command">
            <div><code>sequence.get_sequence()</code></div>
            <Clipboard source="sequence.get_sequence()"></Clipboard>
          </div>
          <p>An input dialog will appear, paste the <i>sequence strand</i> and hit <code>enter</code>, followed by the <i>sequence bio-type</i> and hit <code>enter</code> and finally the <i>sequence label</i> and hit <code>enter</code></p>
        </div>
        <div class="section--item setting">
          <h3>Setting Sequence</h3>
          <p>Alternatively, call the <code>set_sequence</code> method with the command below:</p>
          <div class="command">
            <div><code>sequence.set_sequence(arg1, arg2, arg3)</code></div>
            <Clipboard source="sequence.set_sequence(arg1, arg2, arg3)"></Clipboard>
          </div>
          <p>and provide the following parameters:</p>
          <ul class="documentation--list">
            <li>arg1: sequence strand</li>
            <li>arg2: sequence bio type</li>
            <li>arg3: sequence label</li>
          </ul>
          <p>The order of parameters are important for accurate result and output. For example:</p>
          <div class="command">
            <div><code>sequence.set_sequence('ACGT', 'DNA', 'Label')</code></div>
            <Clipboard source="sequence.set_sequence('ACGT', 'DNA', 'Label')"></Clipboard>
          </div>
        </div>
        <div class="section--item uploading">
          <h3>Uploading File</h3>
          <p>Uploading of FASTA file is also supported. To begin, provide the path to file in drive to the <code>upload_sequence</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.upload_sequence('path-to-file.txt')</code></div>
            <Clipboard source="sequence.upload_sequence('path-to-file.txt')"></Clipboard>
          </div>
          <p>This could be a user generated file or a FASTA file from online platforms. For example:</p>
          <div class="command">
            <div><code>sequence.upload_sequence('../FASTA.txt')</code></div>
            <Clipboard source="sequence.upload_sequence('../FASTA.txt')"></Clipboard>
          </div>
        </div>
        <div class="section--item generating">
          <h3>Generating Random Sequence</h3>
          <p>Random strand of either of <b>DNA</b> or <b>RNA</b> is also available. Call the <code>generate_sequence</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.generate_sequence(arg1, arg2)</code></div>
            <Clipboard source="sequence.generate_sequence(arg1, arg2)"></Clipboard>
          </div>
          <p>and supply the following parameters:</p>
          <ul class="documentation--list">
            <li>arg1: sequence length</li>
            <li>arg2: sequence bio type</li>
          </ul>
          <p>For example:</p>
          <div class="command">
            <div><code>sequence.generate_sequence(40, 'RNA')</code></div>
            <Clipboard source="sequence.generate_sequence(40, 'RNA')"></Clipboard>
          </div>
          <p>This is the fastest way to get up and running when working with CLI.</p>
        </div>
      </section><hr>
      <section class="section invocation">
        <div class="section--item frequency">
          <h3>Counting Base Frequency</h3>
          <p>To count nucleotides in a given sequence, call the <code>nucleotide_frequency</code> method with following command:</p>
          <div class="command">
            <div><code>sequence.nucleotide_frequency()</code></div>
            <Clipboard source="sequence.nucleotide_frequency()"></Clipboard>
          </div>
        </div>
        <div class="section--item transcription">
          <h3>DNA Transcription</h3>
          <p>For DNA transcription to RNA, call the <code>transcription</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.transcription()</code></div>
            <Clipboard source="sequence.transcription()"></Clipboard>
          </div>
          <p>This returns a strand with Thymine replaced with Uracil.</p>
        </div>
        <div class="section--item complement">
          <h3>Reverse Complement</h3>
          <p>To get the reverse complement of a particular sequence, call the <code>reverse_complement</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.reverse_complement()</code></div>
            <Clipboard source="sequence.reverse_complement()"></Clipboard>
          </div>
          <p>This call will swap adenine with thymine and guanine with cytosine in the returned sequence strand.</p>
        </div>
        <div class="section--item content">
          <h3>GC Content</h3>
          <p>The GC content of a sequence can be calculated by call the <code>gc_content</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.gc_content()</code></div>
            <Clipboard source="sequence.gc_content()"></Clipboard>
          </div>
          <p>This call returns the GC Content in a sequence strand.</p>
        </div>
        <div class="section--item aminoacid">
          <h3>Translate to Amino-acid</h3>
          <p>Translating bases or a sequence strand to aminoacid can be accomplished by calling the <code>translate_seq</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.translate_seq()</code></div>
            <Clipboard source="sequence.translate_seq()"></Clipboard>
          </div>
          <p>This returns the amino-acid version of the translated sequence strand.</p>
        </div>
        <div class="section--item frames">
          <h3>Getting Reading Frames</h3>
          <p>Grouping successive bases in a sequence of DNA that into codons for the amino acids encoded by the DNA is done using <code>gen_reading_frames</code> method. The the command is shown below:</p>
          <div class="command">
            <div><code>sequence.gen_reading_frames()</code></div>
            <Clipboard source="sequence.gen_reading_frames()"></Clipboard>
          </div>
          <p>This call returns a 6 reading frame of a sequence strand.</p>
        </div>
        <div class="section--item proteins">
          <h3>Translating to Proteins</h3>
          <p>In order ot translate a sequence strand into protein, call the <code>all_proteins_from_orfs</code> method using the command below:</p>
          <div class="command">
            <div><code>sequence.all_proteins_from_orfs()</code></div>
            <Clipboard source="sequence.all_proteins_from_orfs()"></Clipboard>
          </div>
          <p>It returns all the available proteins found in a given strand. This output could be further sorted to either get the longest or the shortest strand.</p>
        </div>
      </section><hr>
      <section class="section gui">
        <div>
          <h2>Using GUI:</h2>
        </div>
      </section>
      <section class="section">
        <div class="section--item downloading">
          <h3>Downloading Application</h3>
          <p>Click <a href="https://dev.d2j6j4pgiubh78.amplifyapp.com/#installer">Installer</a> link for respective Operating System (OS) to get started. Then, navigate and clone the repository. The README.md document contains the step by step guide on how to build the desktop app for each OS.</p>
          <p>Once successfully installed, double-click the application to launch the application.</p>
        </div>
      </section><hr>
      <section class="section">
        <div class="section--item using">
          <h3>Getting Data</h3>
          <p>The GUI accepts data in three forms, namely:</p>
          <ul class="documentation--list">
            <li>Manual input</li>
            <li>File upload</li>
            <li>Random sequence generation</li>
          </ul>
          <p>To manually enter data, type in or paste sequence strand in the input <code>textarea</code>, select bio-type from the drop down, and input the sequence label in the label input. Click the <code>Submit</code> button to load your data. If successful, aequence summary will be displayed in the output <code>textarea</code>.</p>
          <p>For file upload, click the <code>Select File</code> button. A dialog will appear, select a <code>.txt</code> FASTA file from drive and upload. On successful upload, the sequence summary will be displayed in the output <code>textarea</code>.</p>
          <p>With random sequence generation, firstly select the checkbox under the <code>Submit</code> button. Then, select the sequence type from the drop down, and enter the desired length to be generated.</p>
        </div>
      </section><hr>
      <section class="section">
        <div class="section--item selecting">
          <h3>Selecting Functions</h3>
          <p>A list of functions are available for manipulating and transforming sequence strands. These options are contained within the drop down menu above the output textarea. Some of them include:</p>
          <ul class="documentation--list">
            <li>Sequence Summary</li>
            <li>Reverse Complement</li>
            <li>GC Content</li>
          </ul>
          <p>The output is displayed in the output textarea..</p>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/_partials/Header.vue";
import Footer from "@/components/_partials/Footer.vue";
import Clipboard from "@/components/_partials/Clipboard.vue";
export default {
  name: "Documentation",
  components: {
    Header,
    Footer,
    Clipboard,
  },
  data() {
    return {
      canCopy: false,
      isCopying: true,
    };
  },
  created() {
    this.canCopy = !!navigator.clipboard;
  },
  methods: {
    async copy(s) {
      await navigator.clipboard.writeText(s);
      // alert('Copied!');
    },
    copied() {
      this.isCopying = false;
      setTimeout(() => {
        this.isCopying = true;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem 0.5rem;
  text-align: left;
}
.section {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.section--item {
  margin-bottom: 1rem;
}
.page--title {
  text-align: center;
}
p code {
  background-color: #e2e2e2;
  padding: 0.05rem 0.2rem;
  border-radius: 5px;
}
.command {
  margin-bottom: 16px;
  position: relative !important;
  padding: 1rem 0.1rem;
  margin: 1rem 0;
  border-radius: 5px;
  background-color: #f6f8fa;
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.command:hover {
  opacity: 0.5;
}
.documentation--list {
  list-style-position: inside;
}
@media only screen and (min-width: 481px) {
  .container {
    padding: 1rem;
  }
  .command {
    margin-bottom: 16px;
    position: relative !important;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    background-color: #f6f8fa;
    /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
}
@media only screen and (min-width: 981px) {
  .container {
    padding: 1rem;
    text-align: left;
    width: 60%;
    margin: 0 auto;
  }
  .command {
    margin-bottom: 16px;
    position: relative !important;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    background-color: #f6f8fa;
    /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
}
</style>