# Kubernetes Security Webinar
[[in Russian] YouTube video](https://www.youtube.com/watch?v=koTqZS-ThZ8&t=1183s) (October 13, 2021)

Authors:
- Artem Yushkovsky ([LinkedIn](https://www.linkedin.com/in/artem-yushkovsky/), [GitHub](https://github.com/atemate))
- Maxim Mosharov @ [Whitespots.io](https://whitespots.io/) ([LinkedIn](https://www.linkedin.com/in/maxim-mosharov-50904113b/))
- Host: Marsel Ibraev @ [Slurm.io](https://slurm.io/) (email: `m.ibraev` `at` `slurm.io`)

---
[![Hello world](./static/00-hello-world.png)](https://www.youtube.com/watch?v=koTqZS-ThZ8)


<!--
---
![K8s threat matrix](./static/k8s-matrix.png)
*Threat matrix for Kubernetes [introduced](https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/) in April 2020 by Azure Security Center*
-->

---


## Demo setup
```
$ k version
Client Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.3", GitCommit:"ca643a4d1f7bfe34773c74f79527be4afd95bf39", GitTreeState:"archive", BuildDate:"2021-07-16T17:16:46Z", GoVersion:"go1.16.5", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.2", GitCommit:"8b5a19147530eaac9476b0ab82980b4088bbc1b2", GitTreeState:"clean", BuildDate:"2021-09-15T21:32:41Z", GoVersion:"go1.16.8", Compiler:"gc", Platform:"linux/amd64"}

$ k get nodes
NAME     STATUS   ROLES                  AGE   VERSION
seck8s   Ready    control-plane,master   17h   v1.22.2
```
