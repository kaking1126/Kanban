import { Card, Col, Row, Button, Flex } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableCard from './DraggableCard';

function KanbanBoard() {


    return (

        <div>
            <Flex style={{ margin: '16px' }} justify="flex-end">
                <Button value="large" type="primary">Add Task</Button>
            </Flex>

            <Row gutter={16} style={{ margin: '16px' }}>
                <Col span={8}>
                    <Card title="To-Do">
                        <DndProvider backend={HTML5Backend}>
                            <DraggableCard id="task1" title="Task 1" />
                            <DraggableCard id="task2" title="Task 2" />
                        </DndProvider>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="In Progress" bordered={false}>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Completed" bordered={false}>
                    </Card>
                </Col>
            </Row>

        </div >


    );
}

export default KanbanBoard