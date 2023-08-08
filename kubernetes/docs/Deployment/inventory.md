
#### Object: inventory
#### Type: Deployment

### Cluster에 inventory Deployment를 생성하려면 아래의 명령어를 실행하세요.

```
$ kubectl create -f https://minio.msaez.io/labs-msaez.io/yamlStorage/newtest-0808/yang1762%40uengine.org/Deployment/inventory.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20230808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T074245Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=a52bd394cfa74fe444bee35ad645ca19f0722035d879bbd20d526dc562b2d64f
```
- Yaml 파일에 명시된 스펙으로 inventory Deployment를 생성합니다.

```
$ kubectl apply -f https://minio.msaez.io/labs-msaez.io/yamlStorage/newtest-0808/yang1762%40uengine.org/Deployment/inventory.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20230808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T074245Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=a52bd394cfa74fe444bee35ad645ca19f0722035d879bbd20d526dc562b2d64f
```
- Create가 된 상태라면 inventory Deployment의 수정이 이루어지고, Create가 된 상태가 아니라면 inventory Deployment를 Create 해주는 명령어입니다.  
#

### inventory Deployment가 정상적으로 생성되었는지 확인하시려면 아래의 명령어를 실행하세요.

```
$ kubectl get Deployment

NAME            READY   UP-TO-DATE   AVAILABLE   AGE
inventory           3/3     3            3           5m43s

```
- inventory Deployment와 Pod, Replicaset이 모두 확인이 된다면 정상적으로 생성된 것입니다.
#

### 생성된 inventory Deployment의 상세 실행 정보를 확인하시려면 아래의 명령어를 입력하세요.

```
$ kubectl describe Deployment inventory
```
- inventory Deployment의 상태를 확인하여 문제가 있는지 확인합니다. 
#

### Kubernetes Cluster network 외부에서 service에 access할 때, 해당 명령어로 외부 IP traffic을 허용할 수 있습니다.

```
$ kubectl port-forward Deployment/inventory 8080:8080
```
#

### inventory Deployment를 삭제하려면 아래의 명령어를 실행하세요.

```
$ kubectl delete Deployment inventory
```
#

