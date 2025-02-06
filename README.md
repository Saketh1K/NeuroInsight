<h1 align="center"> NeuroInsight </h1>

![NeuroInsight_ Logo](https://github.com/ParagGhatage/NeuroCure/blob/main/frontend/public/pexels-googledeepmind-17483868.jpg) 

Overview
NeuroInsight is an advanced brain tumor detection and classification project that leverages deep learning techniques for precise medical image analysis. Utilizing TensorFlow and custom machine learning models, NeuroInsight aims to enhance diagnostic accuracy and assist healthcare professionals in detecting brain tumors from MRI scans efficiently.
Key Features
Multi-Model Ensemble: Integrates multiple models for enhanced accuracy in detection and classification.
Segmentation: Efficient tumor segmentation from MRI images for improved visualization.
User-Friendly Interface: Developed using Next.js and Tailwind CSS, offering a seamless image upload and prediction experience.
Cloud Deployment: Easily deployable on Google Cloud for scalability and accessibility.## Project Structure
This project is organized into the following structure:

```

├── data/
| │── README.md
│ ├── sample/
│    ├── sample1.jpg 
|    ├── sample2.jpg  
|    ├── sample3.jpg   
|    └── sample4.jpg 
| 
├── models/
| ├── Readme.md   
│ └── load_and_save_models.py #Loads models from google cloud and saves them to models/models dir
├── src/
│ ├── config.py
│ ├── preprocess.py
│ ├── inference.py
│ └── utils.py
├── notebooks/
│ ├── classification_resnet50.ipynb      # ResNet50 classification model training
│ ├── classification_custom_model.ipynb  # Custom classification model training
│ ├── meta_model_training.ipynb          # Meta-model (ensemble) training
│ ├── segmentation_model.ipynb           # Segmentation model training
│ ├── model_architecture/                # Folder to store model architecture notebook
│    └── model_architecture_overview.ipynb  # Model architecture overview
| 
├── frontend/
| ├── app/
| │   ├── (site)/
| │   │   ├── page.jsx                 # Home page of the app
| │   │   ├── about/page.jsx           # About page
| │   │   ├── contact/page.jsx         # Contact page
| |   |   ├── layout.js                #layout 
| │   |   └── globals.css                  # Global CSS file
| │   └── api/
| │       └── send_email/route.ts       # API route for handling email requests
| │
| ├── components/
| │   ├── Navbar.jsx                   # Navigation bar component
| │   ├── Footer.jsx                   # Footer component
| │   ├── ui/                          # UI components
| │   ├── APIRequest.jsx               # UI components
| │   ├── ImageUploader.jsx            # UI components
| │   ├── Loader.jsx                   # UI components
| │   ├── Email_template.jsx           # UI components
| │   └── InferenceForm.jsx            # Form to upload images for inference
| │
| │
| ├── public/
| │   └── logo.png                     # Static assets (e.g., images, logos)
| │
| ├── tailwind.config.js               # Tailwind CSS configuration file
| ├── postcss.config.js                # PostCSS configuration file
| ├── next.config.js                   # Next.js configuration file
| ├── package.json                     # Node.js dependencies
| └── README.md                        # Project documentation
├── cloud/
│ └── gcp_deploy.sh
├── Dockerfile
├── app.py
├── requirements.txt
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python**: Version 3.x installed on your machine.
- **Node.js**: Make sure you have Node.js installed.
- **TensorFlow**: Install TensorFlow to run the machine learning models.
- **Next.js**: Used for building the frontend of the application.
- **Docker**: Optional, but recommended for containerization.

### Installation

1. **Clone the repository**:
   ```
   bash
   git clone https://github.com/Saketh1K/NeuroInsight.git
   cd NeuroInsight
   pip install -r requirements.txt
   cd frontend
   npm install
   python app.py
   cd frontend
   npm run dev
   
```
