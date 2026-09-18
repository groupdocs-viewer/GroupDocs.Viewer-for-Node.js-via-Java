# Build stage – compiles native module and installs dependencies
FROM node:20-bookworm AS build

RUN apt-get update && apt-get install -y --no-install-recommends \
    openjdk-17-jdk-headless \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# Final stage – slim runtime image
FROM node:20-bookworm-slim AS final

# MS core fonts live in contrib; needed for Office/Project rendering (Aspose fallback fonts)
RUN sed -i 's/^Components: main$/& contrib/' /etc/apt/sources.list.d/debian.sources \
    && echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections \
    && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    openjdk-17-jre-headless \
    fontconfig \
    fonts-dejavu-core \
    fonts-liberation \
    ttf-mscorefonts-installer \
    && fc-cache -f \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

WORKDIR /app

COPY --from=build /app .

CMD ["npm", "start"]
